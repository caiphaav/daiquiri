import { Helmet } from "react-helmet";

interface IMeta {
  title: string;
  content: string;
}

export const Meta = ({ title, content }: IMeta) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta
        name="keywords"
        content="Daiquiri, R2 online, mmorpg, Reign of Revolution, R2 Online: Reign of Revolution, р2, р2 онлайн, р2 сервер"
      />
      <meta name="url" content={content} />
      <title>{title}</title>
    </Helmet>
  );
};
