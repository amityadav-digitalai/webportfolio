import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Baselinedefconfig1 from '../../../docs/_partials/baseline/_baseline-def-config-1.md';

export default function InstallRepoConfigFifth({ children }) {
  return (
    <Tabs defaultValue="baselinedefconfig1" groupId="baselinedefconfig1">
      <TabItem value="baselinedefconfig1" label="Configure the TeamForge installation repository">
        <Baselinedefconfig1 />
      </TabItem>
      <TabItem value="otherTab" label="Other Tab">
        {/* Content for other tab goes here */}
      </TabItem>
      {/* Add more TabItems as needed */}
    </Tabs>
  );
}
