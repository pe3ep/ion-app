import { app } from 'electron'
import serve from 'electron-serve'
import { createWindow } from './helpers'

const isProd = process.env.NODE_ENV === 'production'

if (isProd) {
  serve({ directory: 'app' })
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`)
}

;(async () => {
  setupTitlebar()
  await app.whenReady()

  const mainWindow = createWindow('main', {
    width: 1000,
    height: 600,
    minWidth: 960,
    fullscreenable: false,
    minHeight: 720,
    autoHideMenuBar: true,
    darkTheme: true,
  })

  attachTitlebarToWindow(mainWindow)

  if (isProd) {
    await mainWindow.loadURL('app://./index.html')
  } else {
    const port = process.argv[2]
    await mainWindow.loadURL(`http://localhost:${port}/`)
    mainWindow.webContents.openDevTools()
  }
})()

app.on('window-all-closed', () => {
  app.quit()
})

import {
  setupTitlebar,
  attachTitlebarToWindow,
} from 'custom-electron-titlebar/main'

// setup the titlebar main process
