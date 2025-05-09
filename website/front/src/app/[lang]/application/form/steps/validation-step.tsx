import { motion } from 'framer-motion'
import { UseFormReturn } from 'react-hook-form'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shared/form"
import Link from 'next/link'
import { Checkbox, Separator } from '@/components/shared'

const RequiredAsterisk = () => <span className="text-red-500"> * </span>;

export const ValidationStep = ({
  form,
  delta,
}:{
  form: UseFormReturn,
  delta: number
}) => {
  return (
    <motion.div
      initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <h2 className='text-base font-semibold leading-7 text-[#0284C7]'>
        Validation
      </h2>
      <div className="bg-blue-50 p-4 rounded-md mb-6 border border-blue-200">
        <p className="text-sm text-blue-800">
          La lecture attentive et entière du <Link href="https://drive.google.com/file/d/1SgmraDq5Bj42qJMXDSWnCaX64xSBipD0/view?usp=sharing" className="text-blue-600 underline font-medium">règlement</Link> est obligatoire
        </p>
      </div>
      
      <p className='mt-1 text-sm leading-6 text-gray-600'>
        Lisez attentivement notre règlement intérieur et validez votre candidature
      </p>
      <Separator className='mt-4 bg-[#0284C7]'/>

      <div className='mt-10 grid grid-cols-1 gap-8 justify-between'>
        <FormField
          control={form.control}
          name="termsAgreement"
          render={({ field }) => (
            <div className="space-y-2">
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value || false}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    Règlement de Feynman Moroccan Adventure (FMA) <RequiredAsterisk />
                  </FormLabel>
                  <FormDescription className="text-sm">
                    Je confirme avoir lu entièrement le règlement de Feynman Moroccan Adventure (FMA) et m&apos;engage à le respecter.<br/> 
                    En particulier, je m&apos;engage à être présent sur le campus du LYDEX pendant toute la durée prévue du Camp (sauf dérogation demandée par mail et approuvée explicitement par le comité d&apos;organisation).
                  </FormDescription>
                </div>
              </FormItem>
              <FormMessage />
            </div>
          )}
        />
      </div>
    </motion.div>
  )
}