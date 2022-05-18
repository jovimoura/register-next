import { useEffect, useState } from 'react'
import CollectionClient from '../backend/db/CollectionClients'
import Client from "../core/Cliente"
import ClientRepo from "../core/ClientRepo"
import useTableOrForm from './useTableOrForm'

export default function useClient() {
  const { viewForm, viewTable, visibleForm, visibleTable } = useTableOrForm()

  const repo: ClientRepo = new CollectionClient()

  const [client, setClient] = useState<Client>(Client.void())
  const [clients, setClients] = useState<Client[]>([])

  useEffect(
    getAll,
    []
  )

  function getAll() {
    repo.getAll().then(clients => {
      setClients(clients)
      viewTable()
    })
  }

  function selectedClient(client: Client) {
    setClient(client)
    viewForm()
  }

  async function deletedClient(client: Client) {
    await repo.delete(client)
    getAll()
  }

  function newClient() {
    setClient(Client.void())
    viewForm()
  }

  async function saveClient(client: Client) {
    await repo.save(client)
    getAll()
  }

  return {
    client,
    clients,
    newClient,
    saveClient,
    deletedClient,
    selectedClient,
    setClient,
    setClients,
    visibleForm, 
    visibleTable,
    viewForm,
    viewTable
  }
}