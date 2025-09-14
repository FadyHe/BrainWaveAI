import { companyLogos } from "../constants"

function CmpanyLogos({className}) {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50 ">Helping people create beautiful content at </h5>

      <ul className="flex">
        {companyLogos.map((logo , index)=> (
          <li key={index}
          className="flex itmes-center flex-1 justify-center h-[8.5rem]"
          >
            <img src={logo} width={134} height={28} alt="Company" />
          </li>
        ))}
      </ul>

    </div>
  )
}

export default CmpanyLogos
