import { fireEvent, getByText } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import { JSDOM } from 'jsdom'
import fs from 'fs'
import path from 'path'

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

let dom
let container

describe('index.html', () => {
  beforeEach(() => {
    // Constructing a new JSDOM with this option is the key
    // to getting the code in the script tag to execute.
    // This is indeed dangerous and should only be done with trusted content.
    // https://github.com/jsdom/jsdom#executing-scripts
    dom = new JSDOM(html, { runScripts: 'dangerously' })
    container = dom.window.document.body
  })

  it('renders card slider', () => {
    expect(container.querySelectorAll('.cards_wrapper')).not.toBeNull()
    expect(container.querySelectorAll('.card')).not.toBeNull()
  })

  it('renders cards images', () => {
    expect(container.querySelectorAll('#al-0')).not.toBeNull()
  })


  it('renders slider arrow', () => {
     expect(container.querySelectorAll('#al-0')).not.toBeNull()
     expect(container.querySelectorAll('#ar-0')).not.toBeNull()
     expect(container.querySelectorAll('#al-1')).not.toBeNull()
     expect(container.querySelectorAll('#ar-1')).not.toBeNull()
  })

  // it('render ', async () => {
  //   const button = getByText(container, 'Click me for a terrible pun')
    
  //   fireEvent.click(button)
  //   let generatedParagraphs = container.querySelectorAll('#pun-container p')
  //   expect(generatedParagraphs.length).toBe(1)

  //   fireEvent.click(button)
  //   generatedParagraphs = container.querySelectorAll('#pun-container p')
  //   expect(generatedParagraphs.length).toBe(2)

  //   fireEvent.click(button)
  //   generatedParagraphs = container.querySelectorAll('#pun-container p')
  //   expect(generatedParagraphs.length).toBe(3)
  // })
})
