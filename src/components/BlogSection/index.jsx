import { OrangeButton } from "../OrangeButton";
import { PreviaBlogCard } from "../PreviaBlogCard";
import { BlogSectionStyled } from "./style";

export function BlogSection({ data }) {
  const previaBlog = data.filter((item) => item.section == "Blog");
  return (
    <BlogSectionStyled>
      <div>
        <h2>
          confira o <span>nosso blog</span>
        </h2>
        <OrangeButton text={"ler todos"} />
      </div>
      <ul>
        {previaBlog?.map((item) => (
          <li key={item.id}>
            <PreviaBlogCard
              img={item.image}
              date={item.date}
              previa={item.previa}
            />
          </li>
        ))}
      </ul>
    </BlogSectionStyled>
  );
}
