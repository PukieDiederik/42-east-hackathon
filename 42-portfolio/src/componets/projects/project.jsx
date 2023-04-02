import { useContext } from "react";
import ContextUser from "../../context/contextUser";
import Proj from "./proj";
export function Project() {
  const { user } = useContext(ContextUser);
  const allProj = user.projects.map((proj, i) => <Proj key={i} project={proj} />);
  return <section className="projects">{allProj}</section>;
}
/*
export function Cursus({ finished, fview, started, sview }) {
  return (
    <section className="cursus">
      <svg
        display="block"
        id="cursus"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 595.28 115.63"
      >
        <g>
          <path
            d="m212.5,1.5v.46h-17.77v-.46h17.77m1.5-1.5h-20.77v3.46h20.77V0h0Z"
            fill="#0f7c84"
          />
          <text
            display={fview}
            text_anchor="middle"
            transform="translate(152.09 27.26)"
            fill="#09687a"
            font-family="Commissioner-Bold, Commissioner"
            font-size="13"
            font-weight="700"
          >
            <tspan x="0" y="0">
              {finished}
            </tspan>
          </text>
          <text
            display={sview}
            text_anchor="middle"
            transform="translate(115.11 98.62)"
            fill="#09687a"
            font-family="Commissioner-Bold, Commissioner"
            font-size="13"
            font-weight="700"
          >
            <tspan x="0" y="0">
              {started}
            </tspan>
          </text>
          <path
            d="m212.5,113.67v.46h-17.77v-.46h17.77m1.5-1.5h-20.77v3.46h20.77V0h0Z"
            fill="#0f7c84"
          />
        </g>
      </svg>
    </section>
  );
}
*/
