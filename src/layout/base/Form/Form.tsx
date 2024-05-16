import './Form.scss';

const Form = () => {
  return (
    <div className="Form">
      <h1>Forms</h1>
      <form action="">
        <div className="input_div">
          <label htmlFor="">ФИО пациента</label>
          <input className="input" type="text" name="name" id="name" placeholder="name" />
        </div>
        <hr />
        <div className="input_div">
          <label htmlFor="">Дата рождения </label>
          <input className="input" type="date" name="date" id="date" />
        </div>
        <hr />

        <div className="input_div">
          <div>
            <label htmlFor="">мужской</label>
            <input className="form_checkbox" type="checkbox" name="male" id="male" />
          </div>

          <div>
            <label htmlFor="">женский</label>
            <input className="form_checkbox" type="checkbox" name="female" id="female" />
          </div>
        </div>
        <hr />

        <div className="input_div">
          <div className="input_div">
            <div>
              <label htmlFor="">Паспорт</label>
              <select className="input" name="" id="">
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>

            <div className="input_div">
              <input
                className="input"
                type="number"
                name="number"
                id="number"
                placeholder="номер поспорта"
              />
            </div>
          </div>
          <div className="input_div">
            <label htmlFor="">ИНН</label>
            <input className="input" type="text" name="INN" id="INN" placeholder="ИНН" />
          </div>
        </div>
        <hr />
        <div>
          <label htmlFor="select_country" style={{ marginRight: '10px' }}>
            Страна:
          </label>
          <select className="input" id="select_country" name="code_country">
            <option value="1">КЫРГЫЗСТАН</option>
            <option value="2">РОССИЯ</option>
            <option value="3">КАЗАХСТАН</option>
            <option value="4">УЗБЕКИСТАН</option>
            <option value="5">ТАДЖИКИСТАН</option>
            <option value="6">МОНГОЛИЯ</option>
            <option value="7">АФГАНИСТАН</option>
            <option value="8">НИГЕРИЯ</option>
            <option value="9">НИГЕРИЯ</option>
            <option value="10">МОЛДАВИЯ</option>
            <option value="11">США</option>
            <option value="12">САУДОВСКАЯ АРАВИЯ</option>
            <option value="13">ИТАЛИЯ</option>
            <option value="14">КИТАЙ</option>
            <option value="15">ГРУЗИЯ</option>
            <option value="16">ТУРЦИЯ</option>
          </select>
        </div>
        <div>
          <label htmlFor="">регион</label>
          <select name="" id="">
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>
        <div></div>
        <div className="input_div">
          <input className="input" type="tel" name="tel" id="tel" />
        </div>
      </form>
    </div>
  );
};

export default Form;
