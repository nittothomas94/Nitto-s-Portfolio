'use client'

import Input from './Input'
import Button from './Button'
import { useState, ChangeEvent } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Contact = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    message: '',
  })

  const serviceId = 'service_ev2nsiq'
  const templateId = 'template_r42mjte'
  const publicKey = 'e6ANNdSOOTqKKEfjG'

  const data = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    template_params: {
      from_name: contact.name,
      from_email: contact.email,
      to_name: 'Nitto Thomas',
      message: contact.message,
    },
  }

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: 'name' | 'email' | 'message',
  ) => {
    setContact({ ...contact, [key]: e.target.value })
  }

  const onSendClick = async () => {
    try {
      const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data)
      console.log(response.data)
      toast.success('Message sent successfully')
    } catch (error) {
      console.error(error)
      toast.error('Failed to send message. Try again.')
    }
  }

  return (
    <div className="w-full min-h-[60vh] p-[10px] sm:p-8 flex flex-col gap-6 rounded-md shadow-[0_0_4px_4px_rgb(28,86,24)] hover:shadow-[0_5px_4px_4px_green] transition-shadow duration-300">
      <ToastContainer />
      <Input
        type="text"
        label="Name"
        className="bg-white text-black font-bold text-sm w-full h-10 px-3"
        onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(e, 'name')}
      />

      <Input
        type="email"
        label="Email"
        className="bg-white text-black font-bold text-sm w-full h-10 px-3"
        onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(e, 'email')}
      />

      <Input
        type="text"
        label="Message"
        id="message"
        className="bg-white text-black font-bold text-sm w-full min-h-[160px] px-3 py-2"
        onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
          onChange(e, 'message')
        }
      />

      <div className="mt-4">
        <Button
          text="Send"
          onClick={onSendClick}
          className="w-full h-10 rounded-full bg-green-700 text-white font-semibold hover:bg-green-800 active:scale-95 transition-all duration-200"
        />
      </div>
    </div>
  )
}

export default Contact
