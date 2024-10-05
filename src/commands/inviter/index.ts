import { MyContext } from "../../utils/types";
import { Conversation } from "@grammyjs/conversations";
import { supabase } from "../../core/supabase";

async function inviterConversation(conversation: Conversation<MyContext>, ctx: MyContext) {
  await ctx.reply("Пожалуйста, укажите вашего инвайтера. 😊");
  const telegram_id = ctx.from?.id.toString();
  const { message } = await conversation.wait();

  if (message?.text) {
    const inviterUsername = message.text;
    const { data: inviterUser, error: fetchError } = await supabase.from("users").select("telegram_id").eq("username", inviterUsername).maybeSingle();

    if (fetchError) {
      console.error(`Ошибка при проверке инвайтера: ${fetchError.message}`);
      throw new Error(`Ошибка при проверке инвайтера: ${fetchError.message}`);
    }

    if (!inviterUser) {
      await ctx.reply("Пользователь с таким username не найден. Пожалуйста, попробуйте снова. 😕");
      return;
    }

    const inviterTelegramId = inviterUser.telegram_id;
    const { error: updateError } = await supabase.from("users").update({ inviter: inviterTelegramId }).eq("telegram_id", telegram_id);

    await ctx.reply("Добро пожаловать! 🎉");
    if (updateError) {
      console.error(`Ошибка при обновлении инвайтера: ${updateError.message}`);
      throw new Error(`Ошибка при обновлении инвайтера: ${updateError.message}`);
    }
  }
}

export { inviterConversation };
