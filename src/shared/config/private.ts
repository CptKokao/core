import { z } from "zod";

const privateConfigSchema = z.object({
  GITHUB_ID: z.string().optional(),
  GITHUB_SECRET: z.string().optional(),

  ADMIN_EMAILS: z.string().optional(),
  //   TEST_EMAIL_TOKEN: z.string().optional(),

  EMAIL_SERVER_USER: z.string(),
  EMAIL_SERVER_PASSWORD: z.string(),
  EMAIL_SERVER_HOST: z.string(),
  EMAIL_SERVER_PORT: z.string(),
  EMAIL_FROM: z.string(),

  //   S3_ACCESS_KEY_ID: z.string(),
  //   S3_SECRET_ACCESS_KEY: z.string(),
  //   S3_IMAGES_BUCKET: z.string(),
  //   S3_ENDPOINT: z.string(),
  //   S3_REGION: z.string(),

  //   CONTENT_URL: z.string(),
  //   CONTENT_TOKEN: z.string().optional(),

  //   EVENT_STORE_DB_URL: z.string(),
  //   REDIS_URL: z.string(),

  //   PRODAMUS_KEY: z.string().optional(),
  //   PRODAMUS_URL: z.string().optional(),
  //   PRODAMUS_DEMO_ENABLED: z
  //     .string()
  //     .optional()
  //     .transform<boolean>((value) => value === "true"),
});

export const privateConfig = privateConfigSchema.parse(process.env);
