const people = [
  {
    name: 'Eun',
    role: 'CEO and Founder',
    imageUrl:
      'https://t3.ftcdn.net/jpg/01/38/59/44/360_F_138594499_ljhnEijc9G5ivrnu4BBYtSudhOtP7Bmi.jpg',
    bio: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
  },
  {
    name: 'Taylor',
    role: 'CEO and Founder',
    imageUrl:
      'https://pethelpful.com/.image/w_3840,q_auto:good,c_fill,ar_4:3/MjA5MTQ2MjIxNzkxNTUzMzgw/pros-and-cons-of-owning-siberian-huskies.jpg',
    bio: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
  },
  // More people...
]

export default function Aboutus() {
  return (
    <div className="bg-blue-200 py-20" id="about-us">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-blue-900 sm:text-5xl">Our team</h2>
          <p className="mt-6 text-xl text-blue-900">
            We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
            best results for our clients.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <img alt="" src={person.imageUrl} className="aspect-3/2 w-full rounded-2xl object-cover" />
              <h3 className="mt-6 text-2xl font-semibold text-blue-900">{person.name}</h3>
              <p className="text-lg text-blue-900">{person.role}</p>
              <p className="mt-4 text-xl text-blue-900">{person.bio}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
