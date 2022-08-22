import GlobalStyles from "./main.styles.ts";
import Header from "../components/Header";

export default function MainLayout(props) {
  const { preview } = props;
  return (
    <>
      <Header />
      <main>{props.children}</main>

      <style jsx global>
        {GlobalStyles}
      </style>
    </>
  );
}