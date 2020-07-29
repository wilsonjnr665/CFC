# Colocar um Functionary como 'worker' dentro do Process

# Na hora de criar um username para o funcionário, se espera que o CPF seja uma string do modo "000.000.000-00"

# Os horários de aulas práticas são definidos da seguinte forma:
  - Existe um array chamado SchedulePattern que contém todos os horários, em formato string ("HH:MM"), disponíveis da auto-escola
  - Cada instrutor possui dentro do banco de dados um array de mesmo tamnho que SchedulePattern conténdo valores booleanos, onde cada index corresponde aos indexes do SchedulePattern. Logo, se um index conter valor for true, significa que a string dentro do SchedulePattern com mesmo index, equivale ao horário de aula daquele instrutor
  - Na query já é retornado um array de string baseado nessa lógica 

# OBS: Caso foi registrado um campo único dentro de um modelo mas posteriormente foi alterado, irá dar erro (solução mais fácil é excluir o modelo -> db.modelo.drop())