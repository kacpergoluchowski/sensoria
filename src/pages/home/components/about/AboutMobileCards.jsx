import { Heart, Lightbulb, UsersRound } from 'lucide-react'
import AboutMobileCard from './AboutMobileCard.jsx'

const cards = [
  {
    title: 'Doświadczony zespół',
    description:
      'Tworzymy zespół specjalistów z pasją i wieloletnim doświadczeniem.',
    icon: UsersRound,
    color: 'text-[#16b39c]',
    background: 'bg-[#e5f5f1]',
  },
  {
    title: 'Indywidualne podejście',
    description:
      'Każde dziecko jest inne, dlatego dopasowujemy terapię do jego potrzeb, możliwości i tempa.',
    icon: Heart,
    color: 'text-[#ff8796]',
    background: 'bg-[#ffedf3]',
  },
  {
    title: 'Nowoczesne metody',
    description:
      'Korzystamy z aktualnej wiedzy i sprawdzonych metod terapii integracji sensorycznej.',
    icon: Lightbulb,
    color: 'text-[#ad58f5]',
    background: 'bg-[#f3e6fd]',
  },
]

function AboutMobileCards() {
  return (
    <ul className="grid auto-rows-fr gap-3">
      {cards.map((card) => (
        <AboutMobileCard key={card.title} {...card} />
      ))}
    </ul>
  )
}

export default AboutMobileCards
