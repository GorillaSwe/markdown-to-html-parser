import { NestFactory } from "@nestjs/core";
import { MarkdownModule } from "./core/markdown/markdown.module";

async function bootstrap() {
  const app = await NestFactory.create(MarkdownModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
