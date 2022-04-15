import Settingscard from '../../components/Settingscard'
import Head from 'next/head'

const Settings = () => {
  const settingsVaules = [
    {
      key: 'sheesh',
      title: 'sheesh',
      description: 'testShit',
      action: {
        enable: () => {},
        disable: () => {},
      },
    },
    {
      key: 'ok',
      title: 'ok',
      description: 'testShit',
      action: {
        enable: () => {},
        disable: () => {},
      },
    },
  ]

  return (
    <>
      <Head>
        <title>Настройки</title>
      </Head>
      <h1 className="text-3xl mb-8 heading">Настройки</h1>
      <div className="flex flex-col gap-4">
        {settingsVaules.map((setting) => (
          <Settingscard
            key={setting.key}
            title={setting.title}
            description={setting.description}
            action={setting.action}
          />
        ))}
      </div>
    </>
  )
}

export default Settings
