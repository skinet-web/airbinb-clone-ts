'use client'

import { useRouter } from "next/navigation";
import Heading from "./Heading";
import Button from "./Button";


interface EmptyStateProps {
    title?: string;
    subtitle?:string;
    showReset?: boolean;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
    title = 'No exact matches',
    subtitle = 'Try changing or removing some of your filters',
    showReset
}) => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center h-[60vh] gap-2">
      <Heading
      center 
      title = {title}
      subtitle= {subtitle}
      />
      <div className="w-48 mt-4 ">
        {showReset && (
            <Button 
                outline
                label = 'Remove all filters'
                onClick={ () => router.push('/')}
            />

        )}
      </div>
    </div>
  )
}
