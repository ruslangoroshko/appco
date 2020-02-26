# Documentation

Install modules
```bash
npm insltall
```
Start project
```bash
npm start dev
```

## API

### All stats
```
GET

http://localhost:5000/api/stats

params {
    Limit: num  # default 50
    Offset: num # default 0
}

return {
    usersCount: num,
    userList: [
        {
            id: num,
            first_name: string,
            last_name: string,
            email: string
            gender: string,
            ip_address: string,
            total_clicks: num,
            total_page_views: num,
            details: [
                {
                    user_id: num,
                    date: string,
                    page_views: num,
                    clicks: num
                },
                ...
                
            ]
        },
        ...
    ]
}
```



### Stat By UserId
```
GET

http://localhost:5000/api/stats/:id

params {
    DateFrom: num   # default null
    DateTo: num     # default null
}

return {
    stat: {
        user_id: num,
        userStat: [
            {
                date: string,
                page_view: num,
                clicks: num
            },
            ...
        ]
    }
}
```

#### Итог
- На странице Пользователя есть возможность получить за период и за неделю по дефолту 
- Есть скрипт автоподстановки 0, если в этот день нет информации
- Есть ещё что рефакторить, но это уже детали 
- пытался отобразить картину в целом 
- Некоторые компоненты нужно декомпозрировать ещё 
- Некоторые функции вынести в хуки 