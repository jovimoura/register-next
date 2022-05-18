import { useState } from "react";
import Client from "../core/Cliente";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
  client: Client
  changeClient?: (client: Client) => void 
  canceled?: () => void
}

export default function Form({ client, canceled, changeClient }: FormProps) {
  const id = client?.id
  const [ name, setName ] = useState(client?.name ?? '')
  const [ age, setAge ] = useState(client?.age ?? 0)
  return (
    <div>
      {id ? <Input text='Key' value={id} readonly /> : false }
      <Input className="mb-4" text="Name" value={name} onChange={setName} />
      <Input className="mb-4" text="Age" type="number" value={age} onChange={setAge}/>
      <div className="flex justify-end">
        <Button onClick={() => changeClient?.(new Client(name, +age, id))} color="blue" className="mr-2 bg-gradient-to-r from-blue-400 to-blue-900">
          { id ? 'Edit' : 'Save' }
        </Button>
        <Button onClick={canceled} className="bg-gradient-to-r from-gray-400 to-gray-900">
          Cancel
        </Button>
      </div>
    </div>
  )
}