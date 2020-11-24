import Alert from '../Alert.vue'
import { mount } from '@vue/test-utils'
describe('Alert.vue', () => {
  describe('props', () => {
    it('title', () => {
      const wrapper = mount(Alert, {
        props: {
          title: 'test title'
        }
      })
      const wrapperSlot = mount(Alert, {
        slots: {
          title: () => {
            return 'title slot'
          }
        }
      })

      expect(wrapper.find('span').text()).toBe('test title')
      expect(wrapperSlot.find('span').text()).toBe('title slot')
    })

    it('description', () => {
      const wrapper = mount(Alert, {
        props: {
          description: 'test description'
        }
      })
      const wrapperSlot = mount(Alert, {
        slots: {
          default: () => {
            return 'description slot'
          }
        }
      })

      const wrapperBoth = mount(Alert, {
        props: {
          description: 'test description'
        },
        slots: {
          default: () => {
            return 'description slot'
          }
        }
      })

      expect(wrapper.find('.el-alert__description').text()).toBe(
        'test description'
      )

      expect(wrapper.find('.el-alert__description').text()).toBe(
        'test description'
      )
      
      expect(wrapperSlot.find('.el-alert__description').text()).toBe(
        'description slot'
      )
      expect(wrapperBoth.find('.el-alert__description').exists()).toBe(false)
    })

    it('type', () => {
      const wrapperType = mount(Alert, {
        props: {
          title: 'test',
          type: 'success',
          showIcon: true
        }
      })
      expect(wrapperType.find('.el-alert--success').exists()).toBe(true)
    })


    it('closable', () => {
      const wrapperTrue = mount(Alert, {
        props: {
          closable: true
        }
      })
      const wrapperTrueWithText = mount(Alert, {
        props: {
          closable: true,
          closeText: '知道了'
        }
      })
      const wrapperFalse = mount(Alert, {
        props: {
          closable: false
        }
      })

      expect(wrapperTrue.find('.el-alert__closebtn').attributes('style')).toBe(
        undefined
      )
      expect(wrapperTrueWithText.find('.el-alert__closebtn').text()).toContain(
        '知道了'
      )
      expect(wrapperFalse.find('.el-alert__closebtn').attributes('style')).toBe(
        'display: none;'
      )
    })

    it('showIcon', () => {
      const wrapperTrue = mount(Alert, {
        props: {
          showIcon: true
        }
      })
      const wrapperFalse = mount(Alert, {
        props: {
          showIcon: false
        }
      })

      expect(wrapperTrue.find('.el-alert__icon').exists()).toBe(true)
      expect(wrapperFalse.find('.el-alert__icon').exists()).toBe(false)
    })

    it('center', () => {
      const wrapperTrue = mount(Alert, {
        props: {
          center: true
        }
      })
      const wrapperFalse = mount(Alert, {
        props: {
          center: false
        }
      })

      expect(wrapperTrue.find('.is-center').exists()).toBe(true)
      expect(wrapperFalse.find('.is-center').exists()).toBe(false)
    })

    it('effect', () => {
      const wrapperLight = mount(Alert, {
        props: {
          effect: "light"
        }
      })
      const wrapperDark = mount(Alert, {
        props: {
          effect: "dark"
        }
      })

      expect(wrapperLight.find('.is-light').exists()).toBe(true)
      expect(wrapperDark.find('.is-dark').exists()).toBe(true)
    })
  })
})

describe('event', () => {
  it('close', () => {
    const wrapper = mount(Alert)
    wrapper.find('.el-alert__closebtn').trigger('click')
    expect(wrapper.emitted('close')).toBeTruthy()
  })
})
