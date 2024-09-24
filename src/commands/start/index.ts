import { InputFile } from "grammy";
import { MyContext } from "../../utils/types";

async function start(ctx: MyContext) {
  const photoPath = "assets/neurocoder/neurocoder.png";

  // const keyboard = new InlineKeyboard()
  //   .text("Узнать о наших курсах и тарифах", "courses")
  //   .row()
  //   .text("Записаться на бесплатный урок", "lesson")
  //   .row()
  //   .text("О текущих акциях и скидках", "promotions")
  //   .row()
  //   .text("Задать вопрос", "question");

  await ctx.replyWithPhoto(new InputFile(photoPath), {
    caption:
      "👋 Привет!\n" +
      "Я Дмитрий НейроКодер, создатель этого бота, и я здесь, чтобы помочь вам освоить создание нейроботов и автоворонок для Telegram и ВКонтакте, а также продвинуть вашу личность или бренд в социальных медиа через создание вирусного контента 🚀\n\n" +
      "Чем могу помочь вам сегодня?\n" +
      "- Узнать о наших курсах и тарифах\n" +
      "- Записаться на бесплатный урок\n" +
      "- Получить информацию о текущих акциях и скидках\n" +
      "- Задать вопрос о создании ботов\n\n" +
      "Просто выберите нужный пункт или напишите свой вопрос, и я с радостью помогу вам! 🤖\n\n" +
      '<a href="https://www.instagram.com/neuro_coder">Instagram</a> | <a href="https://www.youtube.com/@neuro_coder_ai_bot">YouTube</a> | <a href="https://vk.com/neuro_coder">VK</a> | <a href="https://t.me/neuro_coder_ai">Channel</a> | <a href="http://t.me/neuro_coder_group">Group</a>',
    parse_mode: "HTML",
    // reply_markup: keyboard,
  });
}

export { start };
