import React, { Component } from 'react';

interface Props {}
interface State {
  searchText: string;
}
class SearchBar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const saved = localStorage.getItem('search') || '';
  }
}
