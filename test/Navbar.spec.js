import { mount, shallowMount, RouterLinkStub } from '@vue/test-utils'
import NavbarComponent from '@/components/Navbar'
import ListNavBarComponent from '@/components/ListNavbar'

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

  test('it should render ListNavBarComponent as child component', () => {
    const wrapper = mount(NavbarComponent, {
      stubs: {
        NuxtLink: RouterLinkStub,
        ListNavBarComponent: true
      }
    })

    expect(wrapper.find(ListNavBarComponent).exists()).toBe(true)
  })
})
