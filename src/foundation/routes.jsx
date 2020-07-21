import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Entrance } from '../pages/entrance';
import { BlogHome } from '../pages/blog_home';
import { Entry } from '../pages/entry';
import { NotFound } from '../pages/not_found';

export function Routes() {
  const error = useSelector((state) => state.error);

  if (error.error !== undefined) {
    return <NotFound />;
  }

  return (
    <Switch>
      <Route exact path="/">
        <Entrance />
      </Route>
      <Route exact path="/:blogId">
        <BlogHome />
      </Route>
      <Route exact path="/:blogId/entry/:entryId">
        <Entry />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
}
