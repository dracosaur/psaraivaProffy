const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async (db) => {
   //Inserir dados
   
   proffyValue = {
       name: 'Pietro Saraiva',
       avatar: 'https://scontent.fcxj1-1.fna.fbcdn.net/v/t31.0-8/14883426_1096757500432282_722232865963174953_o.jpg?_nc_cat=102&_nc_sid=174925&_nc_ohc=4fykPnACSUUAX-1WKCy&_nc_ht=scontent.fcxj1-1.fna&oh=31f1ba05f08cc24216fc8f7f2ce231b9&oe=5F519BC3',
       whatsapp:'54981667226',
       bio:'Ceo da empresa Buba.<br><br>Trabalha com programação a pouco tempo.', 
      
   }

   classValue = {
    subject: 1,
    cost:'20',
    // o proffy ID vira pelo banco de dados
   }

   classScheduleValues = [ 
       //class_id vira pelo banco da dedos vira apos o cadastramento da class
    {
       weekday:1,
       time_from:720,
       time_to:1220
    },
    {
        weekday:0,
        time_from:520,
        time_to:1220
    } 
   ]
   
   // await createProffy(db, {proffyValue, classValue, classScheduleValues})
   // Consultar os dados inseridos

   // todos os proffys
   const selectedProffys = await db.all("SELECT * FROM proffys")
   //console.log(selectedProffys)

   // consultar as classes de um determinado professor
   // e trazer junto os dados do professor
   const selectClassesAndProffys = await db.all(`
   SELECT classes.*, proffys.*
   FROM proffys
   JOIN classes ON (classes.proffy_id = proffys.id)
   WHERE classes.proffy_id = 1;
   `)
 //  console.log(selectClassesAndProffys)

   // o horario que a pessoa trabalha, por exemplo, é das 8h - 18h
   // o horario do time_from (8h) precisa ser antes ou igual ao horario solicitado
   // o time_to precisa ser acima
   const selectClassesSchedules = await db.all(`
     SELECT class_schedule.*
     FROM class_schedule
     WHERE class_schedule.class_id = "1"
     AND class_schedule.weekday = "0"
     AND class_schedule.time_from <= "1300"
     AND class_schedule.time_to > "1300"

   `)
   console.log(selectClassesSchedules)
   

} )