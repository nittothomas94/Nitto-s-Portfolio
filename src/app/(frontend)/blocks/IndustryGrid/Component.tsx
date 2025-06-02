import Image from 'next/image'
// import Button from '../../components/Button'

type Industry = {
  title: string
  description?: string
  // links?: string
  links?: {
    label: string
    url: string
  }[]
  image?: {
    url: string
  }
}

type Props = {
  industries: Industry[]
}

export const IndustryGridBlock = ({ industries }: { industries: Industry[] }) => {
  if (!industries || industries.length === 0) return null

  return (
    <section className="md:px-4 py-5 w-full flex flex-col items-center">
      <h1 className="text-[40px] font-bold mb-6 lg:mb-20 text-[#4ADE80]">MY PROJECTS</h1>
      <div className="lg:w-[85%] xl:w-[90%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-8 lg:place-items-center 2xl:gap-16">
        {industries.map((industry, i) => (
          <div
            key={i}
            className="m-[10px] sm:m-[0px] p-[6px] sm:p-[14px] md:p-[12px] flex flex-col justify-between shadow shadow-green-400 hover:shadow-green-700 hover:shadow-lg rounded-[5px] md:rounded-[4px] sm:w-[540px] sm:px-[10px] md:w-[350px] lg:w-[410px] xl:w-[350px] xl:h-[450px] 2xl:w-[400px] 2xl:h-[360px] box-shadow: 0px 0px 5px 1px rgb(98, 132, 90)"
          >
            {industry.image?.url && (
              <Image
                src={industry.image.url}
                alt={industry.title}
                width={400}
                height={220}
                className="w-full h-50 object-cover mb-4 rounded-[10px]"
              />
            )}
            <h3 className="text-xl font-semibold mb-2 truncate">{industry.title}</h3>

            <p className="text-gray-600 line-clamp-2">{industry.description}</p>

            {industry.links && (
              <div className="flex gap-2 w-full items-center justify-between mt-2">
                {industry.links.map((link, j) => (
                  <a
                    key={j}
                    href={link.url}
                    className="text-decoration-none bg-white text-green-600 font-medium px-[8px] sm:px-[20px] py-[8px] md:py-[0px] xl:py-[5px] xl:mt-[8px] rounded-[5px] text-[12px] sm:text-[12px] md:font-bold text-center text-align-center font-weight-[600] hover:bg-[#2bff00] hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
