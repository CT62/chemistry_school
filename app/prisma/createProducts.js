import prisma from './client';

export default async function Product(){
  await prisma.course.createMany({
  data:[
      {fakeprice:"125",price:"75", time:"10", title:"Organic chemistry I", points:["intro to organic chemistry","hydrocarbons: alkanes","reactions of alkanes","structural isomers and IUPAC","chloroalkanes","alkenes","aliphatic compounds","aromatic compounds."], reviewsCount:"95", stars:4.5,titleDesc:""},

      {fakeprice:"125", price:"125", time:"10", title:"Organic chemistry II",points:["alcohols","reactions of alcohols","aldehydes","ketones","carboxylic acids","esters","solubility and boiling points of homologous series","organic synthetic routes"], reviewsCount:"106", stars:4.0, titleDesc:""},

      {fakeprice:"125", price:"175", time:"6", title:"5th year revision course part I", points:[""], titleDesc:"Theory and exam questions/calculations.", reviewsCount:"12", stars:5.0},
    
      {fakeprice:"125", price:"175", time:"6", title:"5th year revision course part I", points:[""], titleDesc:"Calculation course only.", reviewsCount:"12", stars:5.0},

      {fakeprice:"125", price:"75", time:"6", title:"6th year course on fuels and thermochemistry", points:[""], titleDesc:'Theory and exam questions/calculations.', reviewsCount:'12', stars:5.0},

      {fakeprice:"175" ,price:"125" ,time:"10" ,title:"Experiment course part II" ,points:["all experiments, theory and exam questions."], titleDesc:'External experiment teacher.' ,reviewsCount:'11' ,stars:4.5},

      {fakeprice:"85",price:"35",time:"3" ,title:"Ultimate H1 Guide" ,points:["what comes up every year ","question by questions ","chapter by chapter ","organic chemistry essentials/must knows before sitting the LC exam"],reviewsCount:'18',stars:4.5, titleDesc:""},
  ]
})}
