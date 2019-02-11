import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import ListNavbarComponent from '@/components/ListNavbar'

const mockProps = {
  text: 'home',
  link: '/'
}

describe('test ListNavbar component', () => {
  test('it should success mounting ListNavbar component', () => {
    const wrapper = shallowMount(ListNavbarComponent, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })

    expect(wrapper).toBeTruthy()
  })

  test('it should have props appropriate with data mock', () => {
    const wrapper = shallowMount(ListNavbarComponent, {
      stubs: {
        NuxtLink: RouterLinkStub
      },
      propsData: {
        list: mockProps
      }
    })

    expect(wrapper.props().list).toEqual(mockProps)
  })
})
