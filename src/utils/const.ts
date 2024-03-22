// export const MIDTRANS_API_url = import.meta.env.VITE_MIDTRANS_API_url;
// export const MIDTRANS_CLIENT_KEY = import.meta.env.VITE_MIDTRANS_CLIENT_KEY;
import dotenv from 'dotenv';
dotenv.config();

export const MIDTRANS_API_url = process.env.VITE_MIDTRANS_API_url;
export const MIDTRANS_CLIENT_ID = process.env.VITE_MIDTRANS_CLIENT_KEY;
