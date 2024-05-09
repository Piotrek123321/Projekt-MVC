

Tytuł: System zarządzania cyfrową biblioteką


spis treści:
-stronga główna
-wyświetlanie bazy książek
-dodawnie opinii 
-wprowadzanie nowych książek
-korekta wprowadzanych pozycji
-usuwanie wybranych książek
-logowanie 
-wylogowanie
-help



Opis funkcjonalności:

1. Przeglądanie bazy książek - najpierw użytkownik wybiera metodę sortowania lub wybranego autora. Następnie w postaci tabeli na ekranie wyświetlane sa wszystkie informacje dotyczące bazy danych zgodnie z wybraną opcją.

2. Dodawanie opinii - opcja w której każda osoba która przeczytała jakąś pozycję może ją ocenić w skali od 1 do 5. Następnie opinia dodawana jest do bazy danych w taki sposób że najpierw liczona jest suma wszystkich poprzednich opinii, dodawana bierząca i dzielona przez sumaryczną ilość dodanych opinii. Dzięki tej opcji użytkownicy mogą ocenić popularność tej książki (ilość opinii) oraz jak odbierana jest przez innych.

3. Wprowadzanie - Opcja ta umożliwia wprowadzanie nowych pozycji do bazy danych. Program automatycznie sprawdza czy wszystkie pola są uzupełnione, a rok jest w przedziale od 1200 do 2024. Pola "opinie" oraz "ilość" są uzupełniane automatycznie zerami. Po wpisaniu danych i przesłaniu ich, system sprawdza czy w bazie nie ma już książki o takich samym tytule i autorze, jeżeli są to książka nie jest dodawana i wyświetlany jest komunikat. W przeciwnym wypadku do bazy danych zostaje dodana nowa pozyja której id jest autoinkrementowane przez bazę danych.

4. Korekta - Umożliwia podanie id książki której dane chcemy zmienić, program następnie wyświetla zawartość pozostałych pól i umożliwia ich zmianę. Po ich zatwierdzeniu, baza danych zostaje zaktualizowana.

5. Usuwanie - Po wybraniu id wyświetlane są dane wybranej pozycji i opcje anuluj oraz usuń. Jeżeli wybierzemy usuń to wybrany element zostanie skasowany z bazy danych. Jeżeli podane id nie jest obecne w bazie to wyświetlany jest odpowiedni komunikat. Ta funkcja jako stosunkowo niebezpieczna wymaga autoryzacji przy pomocy logowania. 

6. Logowanie - Umożliwia wprowadznie maila i hasła które po sprawdzeniu poprawności w bazie danych powodują utworzenie tokenu. Jest on przechowywany w ciasteczkach przez 15 min od utworzenia. Jeżeli podane dane są błędne, wyświetlany jest odpowiedni komunikat Zogranizowane jest przy pomocy JSON Web Token.

7. Wylogowanie - Powoduje usunięcie tokenu z ciasteczek.

8. Help - Zawiera krótki opis funkcji oraz przykładowe dane kontaktowe w razie problemów z aplikacją.


Instrukcja obsługi:

Aplikacja do działania wymaga wcześniejszego zainstalowania node.js.

Aplikacja działa na local host, aby ją uruchomić należy wpisać w terminal "node app".

Aplikacja do działania wymaga uprzedniego zainstalowania pewnych paczek. Są to:

-Express.js

-mysql2

-ejs

-cookie-parser

-method-override

Można je zainstalować wpisując w terminal nastepującą komendę:

npm install express mysql2 ejs cookie-parser method-override

Program do funkcjonowania potrzebuje również systemu MySQL oraz utworzenia odpowiedniej bazy danych oraz dodania poprawnych tabel z rekordami. Jeżeli MySQL nie jest zainstalowany, należy to zrobić. Można to zrobić zaznaczając odpowiednie opcje lub wpisując poniższe komendy:

CREATE SCHEMA `ksiazki` ;

CREATE TABLE `ksiazki`.`dane2` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tytul` VARCHAR(60) NULL,
  `autor` VARCHAR(30) NULL,
  `rok` INT NULL,
  `strony` INT NULL,
  `opinia` DOUBLE NULL,
  `ilosc` INT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `ksiazki`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));


W ./Models/db.js należy ustawić odpowiednie parametry potrzebne do połączenia z bazą danych. Są to:

1. host - w przypadku działania na localhoscie (obecny przypadek) wartość powinna być ustawiona na localhost.
2. user - nazwa użytkownika w bazie danych (w tym przypadku root)
3. password - hasło utworzone w trakcie instalacji MySQL 
4. database- nazwa interesującej nas bazy danych, w tym przypadku ksiazki

Tabela users przechowuje dane administratorów którzy mogą używać funkjci logowania, dodanie ich jest możliwe wyłącznie z poziomu bazy danych.


dodanie przykładowych danych z poziomu bazy danych:

INSERT INTO dane2 (tytul, autor, rok, strony, opinia, ilosc ) VALUES
('Harry Potter i Kamień Filozoficzny', 'J.K. Rowling', 1997, 223,0,0),
('Władca Pierścieni: Drużyna Pierścienia', 'J.R.R. Tolkien', 1954, 527,0,0),
('1984', 'George Orwell', 1949, 328,0,0),
('Zabić drozda', 'Harper Lee', 1960, 281,0,0),
('Wieża Jaskółki', 'Andrzej Sapkowski', 1997, 352,0,0);

dodanie administratora do bazy users:

INSERT INTO users (email, password ) VALUES 
('admin1@gmail.com', 'admin123');
