


'use strict';

const puppeteer = require('puppeteer');





async function scrapeData(url, linklist){



  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  try{
  const [el] = await page.$x('/html/body/div[1]/div[1]/div/div/div[1]/div/div/div[1]/div[2]/div/img');
  const src = await el.getProperty('src');
  var image = await src.jsonValue();}

  catch{
    const [el] = await page.$x('/html/body/div[1]/div[1]/div/div/div[1]/div/img');
    const src = await el.getProperty('src');
    var image = await src.jsonValue();
  
  }
  


  const [el2] = await page.$x('/html/body/div[1]/div[1]/div/div/div[2]/div/div/div[1]/div/div[1]/h1');
  const txt = await el2.getProperty('textContent');
  const name = await txt.jsonValue();

  linklist.push({image, name})


  await browser.close();
  
  return linklist
}





  
async function delibere(counter) {
  
  try {
    const browser = await puppeteer.launch();
    const [page] = await  browser.pages();
    var dayslist = ['january01', 'january02', 'january03', 'january04', 'january05' ,'january06', 'january07', 'january08', 'january09', 'january10', 'january11', 'january12', 'january13', 'january14', 'january15', 'january16', 'january17', 'january18', 'january19', 'january20', 'january21', 'january22', 'january23', 'january24', 'january25', 'january26', 'january27', 'january28', 'january29', 'january30', 'january31', 'february01', 'february02', 'february03', 'february04', 'february05', 'february06', 'february07', 'february08', 'february09', 'february10', 'february11', 'february12', 'february13', 'february14', 'february15', 'february16', 'february17', 'february18', 'february19', 'february20', 'february21', 'february22', 'february23', 'february24', 'february25', 'february26', 'february27', 'february28','february29', 'march01', 'march02', 'march03', 'march04', 'march05', 'march06', 'march07', 'march08', 'march09', 'march10', 'march11', 'march12', 'march13', 'march14', 'march15', 'march16', 'march17', 'march18', 'march19', 'march20', 'march21', 'march22', 'march23', 'march24', 'march25', 'march26', 'march27', 'march28', 'march29', 'march30', 'march31', 'april01', 'april02', 'april03', 'april04', 'april05', 'april06', 'april07', 'april08', 'april09', 'april10', 'april11', 'april12', 'april13', 'april14', 'april15', 'april16', 'april17', 'april18', 'april19', 'april20', 'april21', 'april22', 'april23', 'april24', 'april25', 'april26', 'april27', 'april28', 'april29', 'april30', 'may01', 'may02', 'may03', 'may04', 'may05', 'may06', 'may07', 'may08', 'may09', 'may10', 'may11', 'may12', 'may13', 'may14', 'may15', 'may16', 'may17', 'may18', 'may19', 'may20', 'may21', 'may22', 'may23', 'may24', 'may25', 'may26', 'may27', 'may28', 'may29', 'may30', 'may31', 'june01', 'june02', 'june03', 'june04', 'june05', 'june06', 'june07', 'june08', 'june09', 'june10', 'june11', 'june12', 'june13', 'june14', 'june15', 'june16', 'june17', 'june18', 'june19', 'june20', 'june21', 'june22', 'june23', 'june24', 'june25', 'june26', 'june27', 'june28', 'june29', 'june30', 'july01', 'july02', 'july03', 'july04', 'july05', 'july06', 'july07', 'july08', 'july09', 'july10', 'july11', 'july12', 'july13', 'july14', 'july15', 'july16', 'july17', 'july18', 'july19', 'july20', 'july21', 'july22', 'july23', 'july24', 'july25', 'july26', 'july27', 'july28', 'july29', 'july30', 'july31', 'august01', 'august02', 'august03', 'august04', 'august05', 'august06', 'august07', 'august08', 'august09', 'august10', 'august11', 'august12', 'august13', 'august14', 'august15', 'august16', 'august17', 'august18', 'august19', 'august20', 'august21', 'august22', 'august23', 'august24', 'august25', 'august26', 'august27', 'august28', 'august29', 'august30', 'august31', 'september01', 'september02', 'september03', 'september04', 'september05', 'september06', 'september07', 'september08', 'september09', 'september10', 'september11', 'september12', 'september13', 'september14', 'september15', 'september16', 'september17', 'september18', 'september19', 'september20', 'september21', 'september22', 'september23', 'september24', 'september25', 'september26', 'september27', 'september28', 'september29', 'september30','october01', 'october02', 'october03', 'october04', 'october05', 'october06', 'october07', 'october08', 'october09', 'october10', 'october11', 'october12', 'october13', 'october14', 'october15', 'october16', 'october17', 'october18', 'october19', 'october20', 'october21', 'october22', 'october23', 'october24', 'october25', 'october26', 'october27', 'october28', 'october29', 'october30', 'october31', 'november01', 'november02', 'november03', 'november04', 'november05', 'november06', 'november07', 'november08', 'november09', 'november10', 'november11', 'november12', 'november13', 'november14', 'november15', 'november16', 'november17', 'november18', 'november19', 'november20', 'november21', 'november22', 'november23', 'november24', 'november25', 'november26', 'november27', 'november28', 'november29', 'november30', 'december01', 'december02', 'december03', 'december04', 'december05', 'december06', 'december07', 'december08', 'december09', 'december10', 'december11', 'december12', 'december13', 'december14', 'december15', 'december16', 'december17', 'december18', 'december19', 'december20', 'december21', 'december22', 'december23', 'december24', 'december25', 'december26', 'december27', 'december28', 'december29', 'december30', 'december31']
    await page.goto(`https://www.famousbirthdays.com/${dayslist[counter]}.html`);
    const elementHandles = await page.$$('a');
    const propertyJsHandles = await Promise.all(
       elementHandles.map(handle => handle.getProperty('href'))
    );
    const hrefs = await Promise.all(
      propertyJsHandles.map(handle => handle.jsonValue())
    );
   
    const links = hrefs.slice(6,10);
    const linksLenght = links.length
    var linklist = []
    var finallist = []
    
    for (var i = 0; i < linksLenght; i++) {
      
      finallist = await scrapeData(links[i], linklist)

    }

    console.log(finallist)
    await new Promise(r => setTimeout(r, 2000));

const fs = require('fs');

const objectAsString = JSON.stringify(finallist);

await new Promise(r => setTimeout(r, 2000));


fs.appendFile('./essaie237.txt', objectAsString, (err) => {
  if (err) throw err;   console.log('The file has been saved!');
 });




    await browser.close();
  } 
  catch (err) {
    console.error(err);
  }

}


async function appelle(){

  var k =0;
  while(k<366){
  
    await delibere(k);
   
    k++;
     
  }
}

appelle();
