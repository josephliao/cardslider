import { fireEvent, getByRole, queryByTestId, getByText } from '@testing-library/dom'
import { screen } from '@testing-library/jest-dom/extend-expect'
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

  it('renders cards images', async () => {
    expect(container.querySelectorAll('.imgWrapper')).not.toBeNull()
  })


  it('renders slider arrow', () => {
     expect(container.querySelectorAll('#al-0')).not.toBeNull()
     expect(container.querySelectorAll('#ar-0')).not.toBeNull()
     expect(container.querySelectorAll('#al-1')).not.toBeNull()
     expect(container.querySelectorAll('#ar-1')).not.toBeNull()
  })

  it('render click cards slider arrow', () => {
      setTimeout(function(){
        const al0 = container.querySelector('#al-0'),
              ar0 = container.querySelector('#ar-0'),
              al1 = container.querySelector('#al-1'),
              ar1 = container.querySelector('#ar-1')
        fireEvent.click(al0)
        let generatedClick1 = container.querySelectorAll('.card')
        expect(generatedClick1.firstChild.classList.contains('hideA')).toBe(true)
        fireEvent.click(ar0)
        let generatedClick2 = container.querySelectorAll('.card')
        expect(generatedClick2.firstChild.classList.contains('hideA')).toBe(true)
        fireEvent.click(al1)
        let generatedClick3 = container.querySelectorAll('.card')
        expect(generatedClick3.classList.contains('showA')).toBe(true)
        fireEvent.click(ar1)
        let generatedClick4 = container.querySelectorAll('.card')
        expect(generatedClick4.classList.contains('showA')).toBe(true)
      }, 1)  
  })
})
