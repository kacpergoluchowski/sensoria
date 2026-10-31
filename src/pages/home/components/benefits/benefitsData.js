import { Accessibility, Brain, Goal, Heart, Smile } from 'lucide-react'

export const benefits = [
  {
    id: 'concentration',
    title: ['Lepsza', 'koncentracja'],
    description: ['Łatwiejsze skupienie', 'w codziennych', 'sytuacjach.'],
    icon: Goal,
    color: 'text-[#08b69f]',
    background: 'bg-[#e3f5f0]',
    shape: 'rounded-[48%_52%_43%_57%/43%_58%_42%_57%]',
  },
  {
    id: 'movement',
    title: ['Pewność', 'w ruchu'],
    description: ['Lepsza koordynacja', 'i kontrola nad ciałem.'],
    icon: Accessibility,
    color: 'text-[#ae53f5]',
    background: 'bg-[#f3e8fe]',
    shape: 'rounded-[53%_47%_48%_52%/45%_50%_50%_55%]',
  },
  {
    id: 'reactions',
    title: ['Spokojniejsze', 'reakcje'],
    description: ['Mniejsze trudności', 'na bodźce.'],
    icon: Heart,
    color: 'text-[#ff8185]',
    background: 'bg-[#ffeded]',
    shape: 'rounded-[58%_42%_43%_57%/48%_43%_57%_52%]',
  },
  {
    id: 'learning',
    title: ['Rozwój', 'w nauce'],
    description: ['Większa gotowość', 'do nauki.'],
    icon: Brain,
    color: 'text-[#20adfa]',
    background: 'bg-[#e4f4ff]',
    shape: 'rounded-[49%_51%_46%_54%/43%_56%_44%_57%]',
  },
  {
    id: 'independence',
    title: ['Większa', 'samodzielność'],
    description: ['Umiejętności przydatne', 'w domu i w szkole.'],
    icon: Smile,
    color: 'text-[#ff9555]',
    background: 'bg-[#fff0e6]',
    shape: 'rounded-[47%_53%_43%_57%/44%_42%_58%_56%]',
  },
]
