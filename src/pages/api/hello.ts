// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { createHandler, Body, Get, HttpCode, NotFoundException, Post, Query } from 'next-api-decorators';

type Data = {
    name: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({ name: "John Doe" });
}
