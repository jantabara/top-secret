// https://nextjs.org/docs/api-routes/introduction

import SGMail from "@sendgrid/mail";
import type { NextApiRequest, NextApiResponse } from "next";

export type ContactFormResponse = {
  readonly success: boolean;
};

export type ContactFromData = {
  readonly name: string;
  readonly email: string;
  readonly message: string;
};

SGMail.setApiKey(process.env.SENGRID_API_KEY);

export default async (
  request: NextApiRequest,
  response: NextApiResponse<ContactFormResponse>
) => {
  if (request.method === "POST") {
    const message = {
      to: "info@8digit.club",
      from: "info@8digit.club",
      subject: "Nové odeslání formuláře",
      html: `Jmeno: ${request.body.name} <br /> E-mail: ${request.body.email} <br /> Zprava: ${request.body.message} `,
    };

    try {
      const rp = await SGMail.send(message);
      console.log(rp);
      response.status(200).json({ success: true });
    } catch (e) {
      console.log(e);
      response.status(200).json({ success: false });
    }
  }
};
