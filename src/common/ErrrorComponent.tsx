import PageContainer from './PageContainer';

export const ErrorComponent = ({ error }) => (
  <PageContainer>
    <div>Error loading: {error}</div>
  </PageContainer>
);
