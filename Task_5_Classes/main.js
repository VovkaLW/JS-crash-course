//Task_5.1
//#1
class cssClass{
  constructor(name_css_Class, styles = {}){
    this.name_css_Class = name_css_Class;
    this.styles = styles;
  }
  setStyle(property, value) {
    this.styles[property] = value;
  }
  delete_CSS_style(property){
    delete this.styles[property];
  }
  getCSS(){
  let css = `.${this.name_css_Class} {\n`;
  for (const [property, value] of Object.entries(this.styles)) {
    css += `  ${property}: ${value};\n`;
  }
  css += `}\n`;
  console.log(css);
  }
}
let new_CSS_Class = new cssClass();
new_CSS_Class.name_css_Class = "border";
new_CSS_Class.setStyle("color","yellow");
new_CSS_Class.getCSS();
new_CSS_Class.setStyle("font-size","18px");
new_CSS_Class.delete_CSS_style("color");
new_CSS_Class.getCSS();
//Task_5.2
//#1
class Button {
  constructor(width,height,text){
    this.width = width;
    this.height = height;
    this.text = text;
  }
  
  showBtn(){
    document.write(`<button style="width:${this.width}px; height:${this.height}px;">${this.text}</button>`);
  }
  
}
class BootstrapButton extends Button {
  constructor(width, height, text, color) {
    super(width, height, text);
    this.color = color;
  }
  showBtn() {
    document.write(`<button style="width:${this.width}px; height:${this.height}px;background-color:${this.color};">${this.text}</button>`);
  }
}
let Button_without_color = new Button(200,100,"I'm a button");
Button_without_color.showBtn();
let Button_with_color = new BootstrapButton(200,100,"I'm a button","yellow");
Button_with_color.showBtn();
//Task_5.3
//#1
class ExtendedDate extends Date{
  show_Date(){
    let mounths = ["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня",]
    console.log(`${this.getDate()} ${mounths[this.getMonth()]}`);
  }
  future_or_past() {
    console.log( this.getTime() >= Date.now());
  }
  Year_Leap(){
    const year = this.getFullYear();
    console.log( (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)? `${year} is a leap year.` : `${year} is not a leap year.`);
  }
  next_day(){
    this.setDate(this.getDate() + 1)
    this.show_Date();
  }
}
let  obj_ExtendedDate = new ExtendedDate();
obj_ExtendedDate.show_Date();
obj_ExtendedDate.future_or_past();
obj_ExtendedDate.Year_Leap();
obj_ExtendedDate.next_day();
