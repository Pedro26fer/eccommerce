import { OrangeButton } from "../OrangeButton";
import { PreviaBlogCard } from "../PreviaBlogCard";
import { BlogSectionStyled } from "./style";

export function BlogSection({ data }) {
  const previaBlog = data.filter((item) => item.section == "Blog");
  return (
    <BlogSectionStyled>
      <div className="headeBlog">
        <h2>
          confira o <span>nosso blog</span>
        </h2>
        <OrangeButton text={"ler todos"} />
      </div>
      <ul>
        <img className="arrowLeft" src="/Rectangle 49.svg" alt="" />
        {previaBlog?.map((item) => (
          <li key={item.id}>
            <PreviaBlogCard
              img={item.image}
              date={item.date}
              previa={item.previa}
            />
          </li>
        ))}
        <img className="arrowRight" src="/Rectangle 50.svg" alt="" />
      </ul>
    </BlogSectionStyled>
  );
}
