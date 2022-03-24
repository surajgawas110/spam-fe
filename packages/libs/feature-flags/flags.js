/**
 * Used for feature flagging. Features can be put behind a feature flag
 * by making an entry in flags.js file and then setting a visibility for it.
 * e.g. if the feature needs to be enabled for devInteg environment set it as below
 *  {
 *      feature1: [environments.devInteg]
 *  }
 *
 * All features are enabled by default on local
 */

export const environments = {
  local: 'LOCAL',
  devInteg: 'DEV_INTEG',
  dev: 'DEV',
  qa: 'QA',
  demo: 'DEMO',
  preProd: 'INTEG',
  prod: 'PROD',
  novo: 'NOVARTIS',
  disDev: 'DIS_DEV',
};

const { local, devInteg, dev, qa, demo, preProd, prod, disDev } = environments;

const availableInAllEnvironments = [local, devInteg, dev, qa, demo, preProd, prod, disDev];

// these are only fallback values. Actual values come from API.
export const flags = {
  approvalWorkflow: availableInAllEnvironments,
  groupingFeature: [],
  workstream: availableInAllEnvironments,
  marketPlaceMenu: availableInAllEnvironments,
  dataFlowDesigner: availableInAllEnvironments,
  rbac: availableInAllEnvironments,
  accountInfoFeature: availableInAllEnvironments,
  auditLogsFeature: availableInAllEnvironments,
  aiOpsIntelligence: availableInAllEnvironments,
  aiOpsIntelligenceV2: [environments.dev, environments.demo, environments.devInteg],
  aiOpsSecurityTab: [environments.dev, environments.demo, environments.devInteg],
  techmaturityindex: availableInAllEnvironments,
  signOffDevelopmentFeature: [environments.dev, environments.demo],
  kubernetesFeature: availableInAllEnvironments,
  createProjectVersionFeature: [environments.dev],
  confluenceFeature: availableInAllEnvironments,
  projectTemplateFeature: [environments.dev, environments.devInteg, environments.demo],
  serviceNowConfiguration: availableInAllEnvironments,
  contextualHelp: availableInAllEnvironments,
  exploreFeatures: availableInAllEnvironments,
  releaseFlag: availableInAllEnvironments,
  valueStreaming: availableInAllEnvironments,
  dpsRunPipeline: availableInAllEnvironments,
  dpsEdgesLabel: availableInAllEnvironments,
  branchDesigner: availableInAllEnvironments,
  zohoWebForms: availableInAllEnvironments,
  autoPopulateProjectDetails: [environments.demo],
  deploymentConfiguration: availableInAllEnvironments,
  defineNewFeatures: [environments.dev, environments.demo],
  disableFeature: [
    environments.qa,
    environments.devInteg,
    environments.integ,
    environments.prod,
    environments.novo,
  ],
  platformOwnedFeedback: [],
  workflowTemplateFeature: [environments.dev],
  topologyView: [environments.dev, environments.demo],
  customDashboard: [environments.dev, environments.devInteg, environments.qa],
  stageEdit: [environments.dev, environments.devInteg, environments.qa],
  clusterMonitoring: [environments.dev, environments.devInteg, environments.qa],
  ideEclipseChe7: availableInAllEnvironments,
  dpsNewFeatures: [environments.disDev],
  dashboardMenu: [environments.dev, environments.devInteg, environments.qa],
  comingSoon: [environments.prod, environments.qa],
  manageAccessTabs: [],
  dataCrawlersAndCatalog: [environments.dev, environments.demo],
  traceability: [environments.dev, environments.devInteg, environments.demo],
  dpsEdgesRunAnimation: availableInAllEnvironments,
  releaseStages: [environments.dev, environments.devInteg, environments.demo],
  dataLineageFeature: [environments.devInteg],
  dpsDataCatalog: [environments.devInteg, environments.dev],
  tourGuideFeature: [environments.devInteg],
  mlflowButtons: [environments.demo],
  multiCloud: [environments.devInteg],
  terraformFeature: [environments.devInteg],
  dpsMultiStage: [environments.dev, environments.qa, environments.devInteg, environments.demo],
  terminologies: [environments.dev, environments.devInteg, environments.demo, environments.qa],
  customAttributes: [environments.dev, environments.devInteg, environments.demo, environments.qa],
  maturityDashboard: [environments.dev, environments.devInteg, environments.demo],
  releaseTrainFeature: [environments.dev, environments.devInteg, environments.demo],
  exitCriteria: [environments.dev, environments.devInteg, environments.demo, environments.qa],
  hardDiskFeature: [environments.dev, environments.devInteg, environments.qa],
  devopsAnalyticsChart: [environments.dev, environments.devInteg, environments.qa],
  productlevelAssessment: [environments.dev, environments.devInteg, environments.demo],
  releaseTrainProductAssociation: [environments.dev, environments.devInteg, environments.demo],
  newtrainRelease: [environments.dev, environments.devInteg, environments.demo],
  maturityActionPlan: [],
  dpsPipelineSchedule: [
    environments.dev,
    environments.devInteg,
    environments.demo,
    environments.qa,
  ],
  releaseLinkFeature: [environments.dev, environments.devInteg, environments.qa],
  maturityAdditionalFeatures: [environments.dev, environments.devInteg, environments.demo],
  dataOps: [environments.dev, environments.devInteg, environments.qa],
  lazsaMLopsFeature: [environments.demo, environments.dev, environments.devInteg, environments.qa],
  exportPipelineAsFile: [environments.dev, environments.devInteg, environments.qa],
  portfolioOverview: [environments.dev, environments.devInteg, environments.qa],
  oldDashboard: [environments.dev],
  secretManager: [
    environments.local,
    environments.devInteg,
    environments.dev,
    environments.qa,
    environments.demo,
  ],
  disableMenu: [environments.novo],
  portfolioProcessTemplate: [environments.dev],
  productDependency: [environments.dev],
  newPortfolioDashboad: [environments.dev, environments.devInteg, environments.qa],
  tenantMaturityAssessment: [environments.dev, environments.devInteg],
  importCatalogFeature: [environments.dev, environments.devInteg, environments.qa],
  releaseTrainTimeline: [environments.dev],
  portfolioTimeLine: [environments.dev],
  featureBudget: [environments.dev, environments.devInteg, environments.qa],
  agileDashboard: [environments.dev, environments.devInteg, environments.qa],
  teamsAndMembersV2: [environments.dev],
  reportsDashboard: [environments.dev, environments.devInteg, environments.qa],
  disableSecretInjection: [environments.dev, environments.local],
  disableAIOpsAppTab: availableInAllEnvironments,
  disableAIOpsMaturityTab: availableInAllEnvironments,
  disMultiSchedule: [
    environments.disDev,
    environments.dev,
    environments.qa,
    environments.prod,
    environments.preProd,
  ],
  productIdeation: [environments.devInteg, environments.dev, environments.local],
};
