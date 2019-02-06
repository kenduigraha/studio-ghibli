import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import NavbarComponent from '../components/Navbar'

const mockProps = [
  {
    text: 'home',
    link: '/'
  },
  {
    text: 'film',
    link: '/film'
  }
]

describe('test navbar component', () => {
  test('it should success mounting navbar component', () => {
    const wrapper = shallowMount(NavbarComponent, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })

    expect(wrapper).toBeTruthy()
  })

  test('it should have props appropriate with data mock', () => {
    const wrapper = shallowMount(NavbarComponent, {
      stubs: {
        NuxtLink: RouterLinkStub
      },
      propsData: {
        dataNavbar: mockProps
      }
    })

    expect(wrapper.props().dataNavbar).toEqual(mockProps)
  })
})
