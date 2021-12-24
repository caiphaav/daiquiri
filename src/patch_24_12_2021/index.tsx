import { SharedComponents, Theme } from "@shared";

import { ITEM, RUNES } from "./mock";

export const PATCH_24_12_2021 = () => {
  const {
    palette: { white, gray },
  } = Theme.useStyledTheme();
  return (
    <SharedComponents.Screen>
      <SharedComponents.NavBar />
      <SharedComponents.Meta
        content={"https://daiquiri.top/events/patch-24-12-2021"}
        title={"Daiquiri - Патч 24.12.2021"}
      />
      <SharedComponents.Header
        thumbnail={
          "https://sun9-78.userapi.com/sun9-34/impg/OstUa3mnqNjPT-h9AG4V9nQ-ELkVEtC1_PdfLQ/xsp6juj5W3k.jpg?size=960x540&quality=96&sign=232a45869f774b4d2dd61bf3e4498f39&type=album"
        }
        title={"Патч 24.12.2021"}
      />
      <SharedComponents.Column padding={"64px 32px"} minHeight={"960px"}>
        <SharedComponents.Text
          text={"Патч 24.12.2021"}
          type={"h1"}
          color={white}
        />
        <SharedComponents.VerticalBox height={48} />
        <SharedComponents.Text
          type={"lg"}
          text={"Добавлены руны в бижутерию:"}
          color={white}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Accordion title={"Список рун"} data={RUNES} />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"lg"}
          text={"Изменения связанные с подземельями Юпитера и Баальбека:"}
          color={white}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"md"}
          text={"Изменён состав Потёртого древнего сундука:"}
          color={gray}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.ResponsiveImg
          mobileWidth={80}
          desktopWidth={30}
          alt={""}
          src={
            "https://sun9-42.userapi.com/sun9-63/impg/RuppEybAIyol3EaoXcn0sg0MHZsIEhnKMPeCPw/rrl04oKGEug.jpg?size=310x207&quality=96&sign=0a714ab0593d35d1f866da6ab3a475d9&type=album"
          }
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.ResponsiveImg
          mobileWidth={80}
          desktopWidth={30}
          alt={""}
          src={
            "https://sun9-42.userapi.com/sun9-75/impg/X3b6Cld6JKXqRvowPZJowkvsTrOXmEUBRu1gkA/J0z_roPf6f8.jpg?size=648x738&quality=96&sign=ea93e17671a6b7fe59999b8fc237d219&type=album"
          }
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"md"}
          text={
            "Помимо общего содержимого с каждым открытым сундуком при помощи Сияющего ключа Юпитера или Сияющего ключа Баальбека игрок будет получать в инвентарь предмет:"
          }
          color={gray}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Accordion
          title={"Обрывок древнего сегмента"}
          data={ITEM}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"md"}
          text={
            "Если игрок накопил 150 обрывков древнего сегмента, он сможет обменять их на ценные предметы у NPC Привратник Баальбека и Юпитера."
          }
          color={gray}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.ResponsiveImg
          mobileWidth={80}
          desktopWidth={30}
          alt={""}
          src={
            "https://sun9-42.userapi.com/sun9-6/impg/QcWeQtvGGMW5HEGo4mtN0XF2c36KZxQU95s-1g/a2-drYc4V6g.jpg?size=520x490&quality=96&sign=48670c2e10c43139b3efb05320334046&type=album"
          }
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"md"}
          text={
            "Предметы которые можно получить случайным образом обменяв 150 сегментов:"
          }
          color={gray}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.ResponsiveImg
          mobileWidth={80}
          desktopWidth={30}
          alt={""}
          src={
            "https://sun9-42.userapi.com/sun9-82/impg/pHmbOAoq3mYmlIZvY-Zr4y-IOuwI1KHAWat2FA/HkyTV_MvIcs.jpg?size=481x587&quality=96&sign=e44802c676a5b266a445f6410b2c7dc6&type=album"
          }
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"md"}
          text={
            'Скорректирован размер монстра: "Древнее семя зла"- теперь размер монстра меньше, исправлена вытекающая из-за этого проблема с недостаточной дистанцией для атаки.'
          }
          color={gray}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.ResponsiveImg
          mobileWidth={80}
          desktopWidth={30}
          alt={""}
          src={
            "https://sun9-42.userapi.com/sun9-14/impg/HR87TMuJmnlTkBCXwwZaTiWXYPSIJbfRk0W8JA/Hck9YPOqIlA.jpg?size=965x581&quality=96&sign=40ab2161b3b62943803ec88b177023a2&type=album"
          }
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"lg"}
          text={"Вернули прежний прайс кольцам бури и уклона."}
          color={white}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"md"}
          text={
            "Сдать оружейнику эти кольца вновь можно по 20,000 серебра за штуку вместо прежних 5,000"
          }
          color={gray}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"lg"}
          text={"Исправлены руны в ожерелья."}
          color={white}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.ResponsiveImg
          mobileWidth={40}
          desktopWidth={15}
          alt={""}
          src={
            "https://sun9-42.userapi.com/sun9-80/impg/gk6gIjpJmJHH6DPUdC3B0T1pAriZwjjpddu44g/hAMwvLxAfhg.jpg?size=151x51&quality=96&sign=d8bccbee42b3f8ce2c7465bb8a9c0241&type=album"
          }
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"md"}
          text={
            "Увеличение силы I-V теперь корректно с каждым усилением дают +1 единицу ключевого параметра. \n" +
            "Увеличение ловкости I-V теперь корректно с каждым усилением дают +1 единицу ключевого параметра. \n" +
            "Увеличение интеллекта I-V теперь корректно с каждым усилением дают +1 единицу ключевого параметра."
          }
          color={gray}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"lg"}
          text={"Исправлены руны в ожерелья."}
          color={white}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.ResponsiveImg
          mobileWidth={40}
          desktopWidth={15}
          alt={""}
          src={
            "https://sun9-42.userapi.com/sun9-82/impg/LEgUGSLSUDhg_4JYuSQeHoHDMJOKtpSn-CtsrA/zSsaJKcxpzU.jpg?size=205x50&quality=96&sign=cefe6e829c0ceb4440061770f39f6b97&type=album"
          }
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"md"}
          text={
            "Потерпели изменения руны:\n" +
            "1) Увеличение получаемого опыта \n" +
            "2) Увелич. кол-ва выпадающих предметов \n" +
            "3) Увеличение HP \n" +
            "4) Увеличение MP\n" +
            "Значительно увеличен эффект от данных рун."
          }
          color={gray}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"lg"}
          text={"Изменение Искаженных торговцев"}
          color={white}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"md"}
          text={"Шанс появления NPC после смерти БОССА увеличен с 20% до 70%."}
          color={gray}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"lg"}
          text={"Корректировки в древе питомцев"}
          color={white}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"md"}
          text={
            "Умение Сокрушающий удар Ур.1 и Сокрушающий удар Ур2. теперь увеличивают параметры всех типов атак, вместо прежнего увеличения только ближних атак."
          }
          color={gray}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.ResponsiveImg
          mobileWidth={80}
          desktopWidth={30}
          alt={""}
          src={
            "https://sun9-42.userapi.com/sun9-33/impg/VVog6ROTyhGmHnRL8j2Q4n0eN_QdxOFb1_NpJg/vuyrjzVXwV4.jpg?size=338x208&quality=96&sign=6e91b7c5845bdb43b97bf09aab534d2f&type=album"
          }
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"lg"}
          text={"Изменение улучшенных классовых умений"}
          color={white}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"md"}
          text={
            "1) Ловкий воин - Ураган\n" +
            "При использовании увеличивает показатель Ловкости персонажа на 6 (ранее было 3)\n" +
            "Аура отражения - Распространение магии\n" +
            "2) Увеличено действие эффекта отражения до 2-х минут (ранее было 1 минута)\n" +
            "3) Проклятие словом силы - Темница иллюзий\n" +
            "Увеличено количество уменьшаемых характеристик путем наложения дебаффа с -5 до - 10.\n" +
            "4) Ветер - Время бури\n" +
            "При использовании умения появляется дополнительный массовый эффект, который длится 5 секунд и восстанавливает здоровье персонажей находящихся под его действием. \n" +
            "Количество восстанавливаемого здоровья: 100 хп в секунду. \n" +
            "Откат умения составляет 2 минуты."
          }
          color={gray}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"lg"}
          text={"Корректировки усиления Меча Ифрита"}
          color={white}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"md"}
          text={
            "Добавлена возможность улучшать предмет Сияющими, Блестящими, Усиленными свитками"
          }
          color={gray}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"lg"}
          text={
            "Корректировки в обмене наград за завоевания и наград правителя"
          }
          color={white}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"md"}
          text={
            "Для корректной работы добавлено условие, при котором персонажи ниже 100-го уровня не смогут воспользоваться обменом наград по 100 шт."
          }
          color={gray}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"lg"}
          text={"Исправление NPC Битвы Гильдий"}
          color={white}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"md"}
          text={
            "Налажена работа получения ежедневного бонуса в виде 5 бонусных эффектов. Теперь в штатном режиме можно получить бонусы у NPC Битва Гильдий"
          }
          color={gray}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"lg"}
          text={"Изменение LvL-up опыта после 100-го уровня"}
          color={white}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"md"}
          text={
            "Каждый 10й уровень начиная со 110 уровня, количество требуемого опыта для достижения следующего уровня будет повышаться."
          }
          color={gray}
        />
        <SharedComponents.VerticalBox height={24} />
      </SharedComponents.Column>
      <SharedComponents.Footer />
    </SharedComponents.Screen>
  );
};
