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
    <section className="mx-auto px-4 py-5 w-full flex flex-col items-center">
      <h1 className="text-7xl font-bold mb-20 text-[#4ADE80]">MY PROJECTS</h1>
      <div className="w-[88%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {industries.map((industry, i) => (
          <div
            key={i}
            className="p-[25px] shadow shadow-green-400 hover:shadow-green-700 hover:shadow-lg rounded-[15px] w-[560px] h-[450px] box-shadow: 0px 0px 5px 1px rgb(98, 132, 90)"
          >
            {industry.image?.url && (
              <Image
                src={industry.image.url}
                alt={industry.title}
                className="w-full h-50 object-cover mb-4 rounded"
                width={400}
                height={220}
              />
            )}
            <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
            <p className="text-gray-600">{industry.description}</p>

            {industry.links && (
              <div className="flex gap-2 w-full items-center justify-between mt-2">
                {industry.links.map((link, j) => (
                  <a
                    key={j}
                    href={link.url}
                    className="text-decoration-none bg-white text-green-600 font-medium px-[8px] py-[8px] rounded-[5px] font-size-[12px] text-align-center font-weight-[600] hover:bg-[#2bff00] hover:text-white"
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
