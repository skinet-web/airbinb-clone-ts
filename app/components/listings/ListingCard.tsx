'use client'

import useCountries from '@/app/hooks/useCountries';
import { SafeUser } from '@/app/types';
import { Listing, Reservation } from '@prisma/client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from '../Button';


interface ListingCardProps {
    data:  Listing;
    reservation?:  Reservation;
    onAction?: (id: string) => void;
    disabled?: boolean;
    actionId?: string;
    actionLabel?: string;
    currentUser?: SafeUser | null;
}

const ListingCard: React.FC<ListingCardProps> = ({
    data,
    reservation,
    onAction,
    disabled,
    actionId,
    actionLabel,
    currentUser
}) => {
  
  const router = useRouter();
  const { getByValue } = useCountries();
  
  const location = getByValue(data.locationValue)

  

  return (
    <div> 
     <div 
      onClick={() => router.push(`/listings/${data.id}`)} 
      className="col-span-1 cursor-pointer group"
     >
      <div className="flex flex-col gap-2 w-full">
        <div 
          className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
        >
          <Image
            fill
            className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
            src={data.imageSrc}
            alt="Listing"
          />
          <div className="
            absolute
            top-3
            right-3
          ">            
          </div>
        </div>
        <div className="font-semibold text-lg">
          {location?.region}, {location?.label}
        </div>
      </div>
     </div>
    </div>
  )
}

export default ListingCard