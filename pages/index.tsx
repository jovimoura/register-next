import Head from 'next/head'
import Button from '../components/Button'
import Form from '../components/Form'
import Layout from '../components/Layout'
import Table from '../components/Table'
import useClient from '../hooks/useClient'

export default function Home() {
  const { client, clients, deletedClient, newClient, saveClient, selectedClient, visibleTable, visibleForm, viewTable } = useClient()
  return (
    <>
      <Head>
        <title>Register Client</title>
        <link
          rel="shortcut icon"
          href="/images/icons/icon.png"
          type="image/x-icon"
        />
      </Head>
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-900 to-purple-900">
        <Layout title="Register Client">
          {visibleTable ? <div className="flex justify-end">
            <Button onClick={newClient} className="mb-4 bg-gradient-to-r from-green-400 to-green-900">
              New Client
            </Button>
          </div> : false}
          <>
            {visibleTable ? (
              <Table
                clients={clients}
                selectedClient={selectedClient}
                deletedClient={deletedClient}
              />
            ) : (
              <Form changeClient={saveClient} canceled={viewTable} client={client} />
            )}
          </>
        </Layout>
      </div>
    </>
  )
}
