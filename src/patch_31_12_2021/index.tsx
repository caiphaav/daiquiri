import { SharedComponents, Theme } from "@shared";

import { KEY, ISKRA } from "./mock";

export const PATCH_31_12_2021 = () => {
  const {
    palette: { white, gray },
  } = Theme.useStyledTheme();
  return (
    <SharedComponents.Screen>
      <SharedComponents.NavBar />
      <SharedComponents.Meta
        content={"https://daiquiri.top/events/patch-24-12-2021"}
        title={"Daiquiri - Patch Notes Part 2"}
      />
      <SharedComponents.Header
        thumbnail={
          "https://sun9-58.userapi.com/sun9-56/impg/ueiK87si7s-c5CR8NyOKzVWMys4rNiNRJkg6SA/hb_bs2tJY70.jpg?size=1359x1000&quality=96&sign=5edf8b5ba73ce3fa09a67e531863e229&type=album"
        }
        title={"Patch Notes Part 2"}
      />
      <SharedComponents.Column padding={"64px 32px"} minHeight={"960px"}>
        <SharedComponents.Text
          text={"Patch Notes Part 2"}
          type={"h1"}
          color={white}
        />
        <SharedComponents.VerticalBox height={48} />
        <SharedComponents.Text
          type={"lg"}
          text={"1. Сокровищницы Грихентеля"}
          color={white}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"md"}
          text={"Сокровищница Грихентеля:"}
          color={gray}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.ResponsiveImg
          mobileWidth={80}
          desktopWidth={30}
          alt={""}
          src={
            "https://sun9-58.userapi.com/sun9-71/impg/5zSJzD93V2fdDWYk16BrXhnJmrLOHYBaw1yF7g/NGL2bLuikDo.jpg?size=760x720&quality=96&sign=971c79565c89c40610301da0377e7d59&type=album"
          }
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"md"}
          text={"Сияющая сокровищница Грихентеля:"}
          color={gray}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.ResponsiveImg
          mobileWidth={80}
          desktopWidth={30}
          alt={""}
          src={
            "https://sun9-58.userapi.com/sun9-71/impg/5zSJzD93V2fdDWYk16BrXhnJmrLOHYBaw1yF7g/NGL2bLuikDo.jpg?size=760x720&quality=96&sign=971c79565c89c40610301da0377e7d59&type=album"
          }
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"lg"}
          text={"2. Переработаны Запечатанные пещеры"}
          color={white}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.ResponsiveImg
          mobileWidth={80}
          desktopWidth={50}
          alt={""}
          src={
            "https://sun9-58.userapi.com/sun9-56/impg/ueiK87si7s-c5CR8NyOKzVWMys4rNiNRJkg6SA/hb_bs2tJY70.jpg?size=1359x1000&quality=96&sign=5edf8b5ba73ce3fa09a67e531863e229&type=album"
          }
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"md"}
          text={
            "В конце каждой из Запечатанной пещеры (ПН,ТП,БЧД,ГК,БО) теперь игроки смогут обнаружить Порталы в святую землю:"
          }
          color={gray}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.ResponsiveImg
          mobileWidth={80}
          desktopWidth={50}
          alt={""}
          src={
            "https://sun9-58.userapi.com/sun9-30/impg/Nu3I54q8QD0ngQ1WNFxjkFifPmJ-NRTbEBgZIQ/_4cPyGsqYvs.jpg?size=821x642&quality=96&sign=90ec238af666a80e98ab96bbbc8a8495&type=album"
          }
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"md"}
          text={
            "Чтобы открыть портал игроку необходимо иметь при себе предмет «Ключ от портала в Святые земли», который игроки могут получить участвуя в игровом событии «Гонка драконов», которое проходит раз в день, в 18:40 по Московскому времени.\n" +
            "Предмет «Ключ от портала в Святые земли» получат лишь первые 3 победителя гонки драконов."
          }
          color={gray}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.ResponsiveImg
          mobileWidth={10}
          desktopWidth={5}
          alt={""}
          src={
            "https://sun9-58.userapi.com/sun9-42/impg/4yP-otRd1VcyIXOZM4LuphhFtOU45tq66u53cA/fEFTJcMB83U.jpg?size=52x53&quality=96&sign=36abc79d835e43976f48436c5f3c82af&type=album"
          }
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"md"}
          text={
            "Открыть портал может любой игрок при помощи «Ключ от портала в Святые земли», после чего портал будет открыт для любого желающего.\n" +
            "Во время открытого портала в диалоговом окне будет предложено «Зайти в портал»" +
            "Воспользовавшись предложением игрок будет автоматически перенесён на одну из 5-ти небольшим местностей, которые населены новыми игровыми Боссами — Стражами Святой земли."
          }
          color={gray}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.ResponsiveImg
          mobileWidth={80}
          desktopWidth={50}
          alt={""}
          src={
            "https://sun9-58.userapi.com/sun9-84/impg/wvdLwXBD6Im-a_78pT-y9b5yxvg-bUhglLE7Dg/nVgCZ1HzLQM.jpg?size=882x665&quality=96&sign=c3e3accbb8b139165b04842ef54e2b31&type=album"
          }
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"md"}
          text={
            "После перемещения игрокам будет отведено 10 минут на уничтожение Босса" +
            "В случае если по истечению времени Босс не уничтожен, игроки автоматически будут перемещены в деревню.\n" +
            "В случае если игроки одолевают босса, после его гибели появится Сундук с сокровищами Святой земли"
          }
          color={gray}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.ResponsiveImg
          mobileWidth={80}
          desktopWidth={50}
          alt={""}
          src={
            "https://sun9-58.userapi.com/sun9-4/impg/DeCxuybV3e8Uv_G4c6Gs4uZsSjGCE8aJcXcmgg/C4Xzq06B-f8.jpg?size=895x584&quality=96&sign=c40f3c98f2931c4ade71b5782b19532d&type=album"
          }
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"md"}
          text={
            "Который можно открыть при помощи «Ключ от сундука Святой земли»"
          }
          color={gray}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Accordion
          title={"Ключ от сундука Святой земли"}
          data={KEY}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"md"}
          text={
            "После того как сундук будет открыт на землю выпадет случайным образом его составляющее\n" +
            "Состав Сундуков святой земли"
          }
          color={gray}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.ResponsiveImg
          mobileWidth={80}
          desktopWidth={50}
          alt={""}
          src={
            "https://sun9-58.userapi.com/sun9-32/impg/sHP0VYwTiP3f5C8rjM2qqxxPbrJmGJQj_FlMPA/C9NCMxzAb7A.jpg?size=622x623&quality=96&sign=8c004bbe5108a26ae3591b6f72be6ec8&type=album"
          }
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"lg"}
          text={"3. Ребаланс Особого древа Гильдии (искры)"}
          color={white}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"md"}
          text={
            "Исправлены и улучшены умения за Искры мироздания\n" +
            "Добавлены новые умения в Особое древо умений Гильдии\n" +
            "Умения могут прокачать персонажи выше 90 уровня\n" +
            "Для улучшения умения необходим предмет «Искра создателя»"
          }
          color={gray}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Accordion title={"«Искра создателя»"} data={ISKRA} />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.ResponsiveImg
          mobileWidth={80}
          desktopWidth={30}
          alt={""}
          src={
            "https://sun9-58.userapi.com/sun9-65/impg/Egntt6Dl6WPTW3uezx-KzEH0ME-RJkUSYtPPow/gzW-dKq4efg.jpg?size=302x607&quality=96&sign=c7a2c26cb4217512f23e8a8afe585e69&type=album"
          }
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"md"}
          text={
            "Все умения за исключением последнего являются пассивными и увеличивают параметры каждого члена Гильдии (подробнее в игре)\n" +
            "Если Гильдия смогла улучшить все новые пассивные умения, то для улучшения становится доступным к улучшению Умение «Спартанский взрыв»\n" +
            "Умение может изучить персонаж выше 100-го уровня\n" +
            "Для улучшения умения необходимо 5 искр создателя\n" +
            "Умение «Спартанский взрыв» имеет массовый эффект\n" +
            "Изучивший умение персонаж отныне сможет наделять себя и всех игроков в отведенном радиусе его воздействию.\n" +
            "Умение «Спартанский взрыв» значительно увеличивает уровень атак, точности, уклонения и поглощения всех типов.\n" +
            "Эффект умения действует 5 минут.\n" +
            "Откат умения: 5 минут."
          }
          color={gray}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.ResponsiveImg
          mobileWidth={80}
          desktopWidth={30}
          alt={""}
          src={
            "https://sun9-58.userapi.com/sun9-34/impg/3G6rfkEG94lFplZZdSaBVkNsH6jHUlMq6LqnVg/iQZ8SwwJpUM.jpg?size=305x242&quality=96&sign=dd19647a825c98c135b22b759353ad0b&type=album"
          }
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"lg"}
          text={
            "4. Налажена работа получения Сертификатов в подземельях Юпитера и Баальбека."
          }
          color={white}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"md"}
          text={
            "Убивая монстров в подземельях будут накапливаться очки сокровищ подземелья, которые отображается на карте Эльтера в левом нижнем углу.\n" +
            "Чем выше степень сокровищ, тем выше шанс получить сертификат в подземелье."
          }
          color={gray}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.ResponsiveImg
          mobileWidth={80}
          desktopWidth={50}
          alt={""}
          src={
            "https://sun9-58.userapi.com/sun9-74/impg/sNLrtkqHx0PT1bdRxpO9982_M8bT89ATUPO4JA/d95uTXq13oA.jpg?size=626x455&quality=96&sign=0db22a8c35bcacd49bd70f27b2e5b205&type=album"
          }
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"lg"}
          text={"5. Налажена работа гонок монстров"}
          color={white}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"md"}
          text={
            "Будет пересмотрен концепт с целью возобновления актуальности текущего сегмента в игре"
          }
          color={gray}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.ResponsiveImg
          mobileWidth={80}
          desktopWidth={50}
          alt={""}
          src={
            "https://sun9-58.userapi.com/sun9-25/impg/G6mHOh6Ck2Xk3Hox6YGhnvoQOwsFSkUT_TlFDg/VfBEBuNuLDE.jpg?size=547x415&quality=96&sign=707f8f5cfa3b066e192b576f62778611&type=album"
          }
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"lg"}
          text={"6. Изменения в ивенте"}
          color={white}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"md"}
          text={
            "Добавлена возможность обмена красных носков на любой другой ивент предмет крафта по курсу 2 к 1."
          }
          color={gray}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.ResponsiveImg
          mobileWidth={60}
          desktopWidth={30}
          alt={""}
          src={
            "https://sun9-58.userapi.com/sun9-55/impg/3DV9gYu9Ef-DnRffpztlglHmxqeiz1w7EQ8uWA/ZODPa63x3O4.jpg?size=316x515&quality=96&sign=424757af05a9f82db70538131ae9877c&type=album"
          }
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"lg"}
          text={
            "7. Изменения Потертого сундука (Контент подземелья Юпитера и Баальбека 2 ур.)"
          }
          color={white}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"md"}
          text={
            "Повышены шансы на выпадение древних точек.\n" +
            "Время возрождения сундука увеличено до 20-ти минут."
          }
          color={gray}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"lg"}
          text={"8. Изменение торговой лавки"}
          color={white}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"md"}
          text={
            "Добавлена возможность продать орудия Хё NPC торговцам по 50,000 серебра. \n" +
            "Это временное решение перенасыщенности Хё пушек на сервере"
          }
          color={gray}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.ResponsiveImg
          mobileWidth={60}
          desktopWidth={30}
          alt={""}
          src={
            "https://sun9-58.userapi.com/sun9-25/impg/SIUTgV5cGkH9f7E3yEv8-2ZKVQAK2B7VxxLkjw/1YJwY5WFj4w.jpg?size=345x467&quality=96&sign=15f54a6daa5523d88165b17c2e4d78fd&type=album"
          }
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"lg"}
          text={"9. Изменения в древе Ассассинов"}
          color={white}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"md"}
          text={
            'Добавлено умение "Улучшение атаки IV"\n' +
            'Для изучения умения необходимо иметь полностью прокачанное умение "Улучшение атаки III" так-же потратить в общей сложности 50 очков в древе и 3 очка предыдущей строки.'
          }
          color={gray}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.ResponsiveImg
          mobileWidth={100}
          desktopWidth={60}
          alt={""}
          src={
            "https://sun9-58.userapi.com/sun9-54/impg/sOCu2xHdCSdGiyUoKbskihkkpaRKOyzg4GRvDQ/lIIk1uZ__gQ.jpg?size=927x495&quality=96&sign=4b8c1099a3695ad27f281ecd992b1bf3&type=album"
          }
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"lg"}
          text={"10. Изменения призывателей"}
          color={white}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"md"}
          text={
            'мение "Бездна" - возвращена анимация прерывающая атаку при активации умения.\n' +
            "\n" +
            'Умение "Боевой тотем жизни" - эффект от умения увеличен с 20 до 60 секунд, время жизни тотема увеличено до 300 секунд.\n' +
            "\n" +
            'В древо призывателей добавлено новое пассивное умение: "Сакральный зов", умение можно найти как в ветке Тотемов, так и в ветке Духов.\n' +
            'Изученное умение "Сакральный зов" - Отключает анимацию каста, прерывающую атаку персонажа у навыков: Огонь преисподней, Бездна, Призыв гоблина-подрывника, Призыв древа маны, Призыв Мандрагоры.'
          }
          color={gray}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.ResponsiveImg
          mobileWidth={100}
          desktopWidth={60}
          alt={""}
          src={
            "https://sun9-58.userapi.com/sun9-80/impg/MuNYDm4mgHAArh4sjrBHIXfs-b_lT7lfKog7aw/vX2iqffS2Og.jpg?size=930x488&quality=96&sign=b30f774868928f360420963d84ff1a38&type=album"
          }
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"lg"}
          text={"11. Изменения в снаряжении"}
          color={white}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"md"}
          text={
            "1. Меч точности Рарки - накладываемый дебаф теперь снижает скорость атаки противника\n" +
            "2. Крепкий щит Метеоса - Увеличены параметры поглощения\n" +
            "3. Браслет убийцы - увеличен урон и точность"
          }
          color={gray}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"lg"}
          text={"12. Изменения мага"}
          color={white}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"md"}
          text={
            'Умение "Ветер - Время бури" более не воздействует на перезарядку основных умений'
          }
          color={gray}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"lg"}
          text={"13. Изменение в создании Гильдии"}
          color={white}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"md"}
          text={
            "Стоимость создания Гильдии увеличена с 1,000 золота до 1,000,000 золота."
          }
          color={gray}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"lg"}
          text={"14. Прочие исправления"}
          color={white}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"md"}
          text={
            "Исправлена ошибка при которой из сундука Хранителя 87 уровня для Призывателей не выпадал Зачарованный Меч могучего Хранителя\n" +
            "Исправлена ошибка при которой умение Лучницы Метеоса имело срок существования 30 дней"
          }
          color={gray}
        />
        <SharedComponents.VerticalBox height={24} />
        <SharedComponents.Text
          type={"lg"}
          text={
            "На этом текущий Патч под кодовым названием «Patch Notes Part 2» закончен и уже идет работа на Патч ноутом Part3, где будет добавлено улучшение перевоплощений, снаряжение арены, дома гильдии с уникальными лавками и уникальными предметами а так-же многое другое! Но уже в новом 2022 году! )\n" +
            "Всех с наступающим!"
          }
          color={white}
        />
        <SharedComponents.VerticalBox height={24} />
      </SharedComponents.Column>
      <SharedComponents.Footer />
    </SharedComponents.Screen>
  );
};
