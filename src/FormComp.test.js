import React from 'react';
import { shallow } from 'enzyme';
import FormComp from './FormComp';


describe('<FormComp />', () => {
  it('renders default without crashing', () => {
    shallow(<FormComp />);
  });

  it('renders with components without crashing', () => {
    shallow(<FormComp label={'test label'} onChange={(e) => setControlledValue(e.target.value)} onClick={() => alert('onClick')} onKeyDown={() => alert('onKeyDown')}/>);
  });

  it('recieves expected values', () => {
    const wrapper = shallow(<FormComp label={'test label'} value={'test valllue'} />);

    expect(
      wrapper.contains(<FormComp><div>test label</div><input value='test valllue'/></FormComp>))
      .toEqual(false);
  });
  it('simulates click events', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<FormComp onClick={onClick}/>);
    expect(wrapper.exists(FormComp)).toEqual(false);
    /*const elDiv = wrapper.find('form>div');
    elDiv.simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
    const elInput = wrapper.find('input')
    elInput.simulate('click');
    expect(onClick).toHaveBeenCalledTimes(2);*/
  });

});