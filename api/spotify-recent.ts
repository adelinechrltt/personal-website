import type { VercelRequest, VercelResponse } from "@vercel/node";
import dotenv from "dotenv";

dotenv.config();

async function getAccessToken() {
    const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization:
                "Basic " +
                Buffer.from(
                    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
                ).toString("base64"),
        },
        body: new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!,
        }),
    });

    const data = await response.json();
    console.log(data);

    return data.access_token;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    try {
        const accessToken = await getAccessToken();

        const spotifyRes = await fetch(
            "https://api.spotify.com/v1/me/player/recently-played?limit=1",
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );

        const data = await spotifyRes.json();

        const item = data.items?.[0];

        if (!item) {
            return res.status(200).json({ message: "Nothing played recently" });
        }

        return res.status(200).json({
            song: item.track.name,
            artist: item.track.artists.map((a: any) => a.name).join(", "),
            albumImage: item.track.album.images[0]?.url,
            playedAt: item.played_at,
        });

    } catch (err) {
        return res.status(500).json({ error: "Failed to fetch recently played" });
    }
}