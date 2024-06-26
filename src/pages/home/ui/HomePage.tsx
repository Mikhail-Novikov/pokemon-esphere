import React from 'react';
import * as L from 'korus-ui';

/**
 * @returns {JSX.Element} Компонент домашней страницы.
 */
export const HomePage: React.FC = (): JSX.Element => (
  <L.Div>
    <L.H1 _marginBottom16 _paddingTop16>
      ТЗ Проекта - Картотека покемонов
    </L.H1>
    <L.Ol _listItem _txtLarge>
      <L.Li>На главной странице должен выводиться список покемонов.</L.Li>
      <L.Li>
        Вверху главной страницы должно быть поле поиска где покемонов можно
        найти/отфильтровать по имени или его части.
      </L.Li>
      <L.Li>
        Пользователь может выбрать сколько покемонов выводить на странице(10,
        20, 50, 100). Пользователь может переключаться между страницами с
        покемонами.
      </L.Li>
      <L.Li>
        При нажатии на имя покемона из списка необходимо перейти на страницу с
        детальной информацией о покемоне, которая должна содержать: имя,
        изображение, тип, характеристики, способности.
      </L.Li>
      <L.Li>
        После перехода на страницу с деталями покемона url должен содержать имя
        этого покемона.
      </L.Li>
      <L.Li>
        Кнопка возврата на заглавную страницу со страницы с детальной
        информации.
      </L.Li>
      <L.Li>
        При наведении или клике(тачскрин) на способность(ability) должен
        всплывать тултип с её текстовым описанием на английском.
      </L.Li>
      <L.Li>Должна быть индикация загрузки(loader), обработка ошибок.</L.Li>
      <L.Li>
        Необходимо реализовать страницу для сравнения выбранных покемонов. На
        этой странице должны выводиться выбранные покемоны в удобном для
        сравнения их характеристик виде.
      </L.Li>
      <L.Li>
        Приложение должно быть опубликовано (Github Pages, Heroku на
        усмотрение). Должна быть предоставлена ссылка на репозиторий и
        опубликованное приложение.
      </L.Li>
    </L.Ol>
  </L.Div>
);
