import { StyleSheet } from "react-native";

export const colors = {
  primary: "#111111",
  primaryDark: "#000000",
secondary: "#D99A00",
secondaryDark: "#B87F00",
  background: "#FFF8E7",
  card: "#FFFFFF",
  textPrimary: "#111111",
  textSecondary: "#6B6254",
  border: "#F0DFAF",
  success: "#2E8B57",
  error: "#B23A48",
  warning: "#D4A017",
};

export const spacing = {
  xs: 6,
  sm: 10,
  md: 16,
  lg: 24,
  xl: 32,
};

export const appStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.md,
  },

  centerScreen: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.md,
    justifyContent: "center",
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: colors.primary,
    textAlign: "center",
    marginBottom: spacing.sm,
    letterSpacing: 0.5,
  },

  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: "center",
    marginBottom: spacing.lg,
    lineHeight: 22,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },

  card: {
    backgroundColor: colors.card,
    borderRadius: 24,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },

  heroCard: {
    backgroundColor: colors.secondary,
    borderRadius: 28,
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },

  heroTitle: {
    color: colors.primary,
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: spacing.sm,
  },

  heroText: {
    color: colors.primary,
    fontSize: 15,
    lineHeight: 22,
  },

  input: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 18,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    fontSize: 16,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },

  primaryButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    borderRadius: 18,
    alignItems: "center",
    marginTop: spacing.sm,
  },

  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 0.3,
  },

  secondaryButton: {
    backgroundColor: colors.secondary,
    paddingVertical: spacing.md,
    borderRadius: 18,
    alignItems: "center",
    marginTop: spacing.sm,
  },

  secondaryButtonText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 0.3,
  },

  outlineButton: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.primary,
    paddingVertical: spacing.md,
    borderRadius: 18,
    alignItems: "center",
    marginTop: spacing.sm,
  },

  outlineButtonText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: "bold",
  },

  disabledButton: {
    opacity: 0.6,
  },

  linkText: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
    marginTop: spacing.md,
  },

  normalText: {
    fontSize: 16,
    color: colors.textPrimary,
    lineHeight: 22,
  },

  mutedText: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },

  errorText: {
    fontSize: 14,
    color: colors.error,
    marginBottom: spacing.sm,
    textAlign: "center",
  },

  successText: {
    fontSize: 14,
    color: colors.success,
    marginBottom: spacing.sm,
    textAlign: "center",
  },

  imagePreview: {
    width: "100%",
    height: 240,
    borderRadius: 22,
    marginBottom: spacing.md,
    backgroundColor: colors.border,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  spaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  homeContainer: {
    flex: 1,
    backgroundColor: colors.secondary,
  },

  homeScrollContent: {
    paddingBottom: spacing.lg,
  },

  homeHeroCard: {
    backgroundColor: colors.card,
    margin: spacing.md,
    borderRadius: 28,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },

  brandRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.lg,
  },

  logoImage: {
    width: 64,
    height: 64,
    resizeMode: "contain",
    marginRight: spacing.md,
  },

  brandTextContainer: {
    flex: 1,
  },

brandName: {
  fontSize: 28,
  fontWeight: "bold",
  color: colors.primary,
  marginBottom: 4,
},

brandTagline: {
  fontSize: 14,
  color: colors.textSecondary,
  lineHeight: 20,
},

heroBadge: {
  alignSelf: "flex-start",
  backgroundColor: "#FFF4D6",
  borderRadius: 999,
  paddingHorizontal: 12,
  paddingVertical: 6,
  marginBottom: spacing.md,
},

heroBadgeText: {
  color: colors.secondaryDark,
  fontSize: 12,
  fontWeight: "700",
  letterSpacing: 0.5,
},

  homeHeroTitleLarge: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.primary,
    lineHeight: 38,
    marginBottom: spacing.sm,
  },

  homeHeroText: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 23,
    marginBottom: spacing.md,
  },

  sectionBlock: {
    paddingHorizontal: spacing.md,
    marginTop: spacing.sm,
  },

  sectionMiniTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.textSecondary,
    marginBottom: spacing.sm,
    textTransform: "uppercase",
    letterSpacing: 0.6,
  },

  premiumCard: {
    backgroundColor: colors.card,
    borderRadius: 24,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },

  premiumCardNumber: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: colors.secondary,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: spacing.sm,
  },

  premiumCardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: spacing.xs,
  },

  premiumCardText: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 21,
  },

  quickActionsRow: {
    flexDirection: "row",
    gap: spacing.md,
    marginTop: spacing.sm,
  },

  actionCard: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: 20,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },

  actionCardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 6,
  },

  actionCardText: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 19,
  },

 splashContainer: {
  flex: 1,
  backgroundColor: colors.secondary,
  justifyContent: "center",
  alignItems: "center",
},

splashContent: {
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: spacing.lg,
},

splashLogo: {
  width: 150,
  height: 150,
  resizeMode: "contain",
  marginBottom: spacing.md,
},

splashAppName: {
  fontSize: 38,
  fontWeight: "bold",
  color: "#FFFFFF",
  letterSpacing: 0.5,
},

  authContainer: {
    flex: 1,
    backgroundColor: colors.secondary,
  },

  authScrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xl,
  },

  authHeader: {
    alignItems: "center",
    marginBottom: spacing.lg,
  },

authLogoWrapper: {
  width: 108,
  height: 108,
  borderRadius: 54,
  backgroundColor: "#E8A11A",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: spacing.md,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 6,
  },
  shadowOpacity: 0.18,
  shadowRadius: 10,
  elevation: 6,
},

  authLogo: {
    width: 76,
    height: 76,
    resizeMode: "contain",
  },

authTitle: {
  fontSize: 36,
  fontWeight: "bold",
  color: "#FFFFFF",
  marginBottom: spacing.xs,
  textAlign: "center",
  letterSpacing: 0.4,
},

authSubtitle: {
  fontSize: 15,
  color: "#FFF4D6",
  textAlign: "center",
  lineHeight: 22,
  maxWidth: 330,
},

authCard: {
  backgroundColor: colors.card,
  borderRadius: 30,
  padding: spacing.lg,
  borderWidth: 1,
  borderColor: "#F3E4B5",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 10,
  },
  shadowOpacity: 0.18,
  shadowRadius: 16,
  elevation: 8,
},

  authCardTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: spacing.xs,
    textAlign: "center",
  },

  authCardText: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: "center",
    lineHeight: 20,
    marginBottom: spacing.lg,
  },

  authLabel: {
    fontSize: 14,
    color: colors.textPrimary,
    fontWeight: "700",
    marginBottom: spacing.xs,
  },

  authInput: {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    paddingHorizontal: spacing.md,
    paddingVertical: 14,
    fontSize: 15,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },

  authButton: {
    backgroundColor: colors.primary,
    borderRadius: 18,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: spacing.sm,
  },

  authButtonText: {
    color: colors.card,
    fontSize: 16,
    fontWeight: "bold",
  },

  authLinkButton: {
    marginTop: spacing.lg,
    alignItems: "center",
  },

  authLinkText: {
    fontSize: 15,
    color: colors.primary,
    fontWeight: "700",
    textAlign: "center",
  },

authFooterText: {
  fontSize: 13,
  color: "#FFF4D6",
  textAlign: "center",
  marginTop: spacing.lg,
  lineHeight: 19,
  paddingHorizontal: spacing.md,
},
homeLogoWrapper: {
  width: 70,
  height: 70,
  borderRadius: 22,
  backgroundColor: "#E8A11A",
  justifyContent: "center",
  alignItems: "center",
  marginRight: spacing.md,
},

homeLogo: {
  width: 48,
  height: 48,
  resizeMode: "contain",
},
homeScrollContentPremium: {
  paddingHorizontal: spacing.md,
  paddingTop: spacing.xl,
  paddingBottom: spacing.xl,
},

homeTopArea: {
  alignItems: "center",
  marginBottom: spacing.lg,
},

homeLogoCircle: {
  width: 120,
  height: 120,
  borderRadius: 60,
  backgroundColor: "#E8A11A",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: spacing.md,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 8,
  },
  shadowOpacity: 0.2,
  shadowRadius: 12,
  elevation: 8,
},

homePremiumLogo: {
  width: 82,
  height: 82,
  resizeMode: "contain",
},

homePremiumTitle: {
  fontSize: 42,
  fontWeight: "bold",
  color: colors.card,
  textAlign: "center",
  letterSpacing: 0.5,
},

homePremiumSubtitle: {
  fontSize: 15,
  color: "#FFF4D6",
  textAlign: "center",
  lineHeight: 22,
  marginTop: spacing.xs,
  maxWidth: 330,
},

homeMainCard: {
  backgroundColor: colors.card,
  borderRadius: 34,
  padding: spacing.lg,
  borderWidth: 1,
  borderColor: "#F3E4B5",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 10,
  },
  shadowOpacity: 0.18,
  shadowRadius: 16,
  elevation: 8,
},

homeBadge: {
  alignSelf: "flex-start",
  backgroundColor: "#FFF4D6",
  borderRadius: 999,
  paddingHorizontal: 14,
  paddingVertical: 7,
  marginBottom: spacing.md,
},

homeBadgeText: {
  fontSize: 12,
  fontWeight: "800",
  color: colors.secondaryDark,
  letterSpacing: 0.6,
},

homeMainTitle: {
  fontSize: 31,
  fontWeight: "bold",
  color: colors.primary,
  lineHeight: 38,
  marginBottom: spacing.sm,
},

homeMainText: {
  fontSize: 15,
  color: colors.textSecondary,
  lineHeight: 23,
  marginBottom: spacing.lg,
},

homeFlowRow: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: spacing.lg,
},

homeFlowItem: {
  alignItems: "center",
},

homeFlowNumber: {
  width: 38,
  height: 38,
  borderRadius: 19,
  backgroundColor: colors.secondary,
  color: colors.primary,
  fontSize: 17,
  fontWeight: "bold",
  textAlign: "center",
  textAlignVertical: "center",
  marginBottom: spacing.xs,
},

homeFlowText: {
  fontSize: 13,
  color: colors.textSecondary,
  fontWeight: "700",
},

homeFlowLine: {
  flex: 1,
  height: 1,
  backgroundColor: colors.border,
  marginHorizontal: spacing.sm,
  marginBottom: 22,
},

homeQuickSection: {
  marginTop: spacing.lg,
},

homeQuickTitle: {
  fontSize: 15,
  fontWeight: "800",
  color: "#FFF4D6",
  textTransform: "uppercase",
  letterSpacing: 0.8,
  marginBottom: spacing.sm,
},

homeQuickRow: {
  flexDirection: "row",
  gap: spacing.md,
},

homeQuickCard: {
  flex: 1,
  backgroundColor: colors.card,
  borderRadius: 24,
  padding: spacing.md,
  minHeight: 125,
  borderWidth: 1,
  borderColor: "#F3E4B5",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.12,
  shadowRadius: 8,
  elevation: 5,
},

homeQuickCardTitle: {
  fontSize: 18,
  fontWeight: "bold",
  color: colors.primary,
  marginBottom: spacing.xs,
},

homeQuickCardText: {
  fontSize: 13,
  color: colors.textSecondary,
  lineHeight: 19,
},
homeSimpleContent: {
  flexGrow: 1,
  paddingHorizontal: spacing.md,
  paddingTop: 120,
  paddingBottom: spacing.xl,
},

homeSimpleHeader: {
  alignItems: "center",
  marginBottom: spacing.xl,
},

homeSimpleLogo: {
  width: 120,
  height: 120,
  resizeMode: "contain",
  marginBottom: spacing.md,
},

homeSimpleTitle: {
  fontSize: 42,
  fontWeight: "bold",
  color: colors.card,
  textAlign: "center",
},

homeSimpleSubtitle: {
  fontSize: 17,
  color: "#FFF4D6",
  textAlign: "center",
  lineHeight: 24,
  marginTop: spacing.xs,
  maxWidth: 310,
},

homeActionCard: {
  backgroundColor: colors.card,
  borderRadius: 34,
  padding: spacing.lg,
  marginBottom: spacing.lg,
  borderWidth: 1,
  borderColor: "#F3E4B5",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 10,
  },
  shadowOpacity: 0.18,
  shadowRadius: 16,
  elevation: 8,
},

homeActionTitle: {
  fontSize: 30,
  fontWeight: "bold",
  color: colors.primary,
  textAlign: "center",
  marginBottom: spacing.sm,
},

homeActionText: {
  fontSize: 16,
  color: colors.textSecondary,
  textAlign: "center",
  lineHeight: 23,
  marginBottom: spacing.lg,
},

homeSimpleOptions: {
  flexDirection: "row",
  gap: spacing.md,
},

homeOptionCard: {
  flex: 1,
  backgroundColor: colors.card,
  borderRadius: 24,
  padding: spacing.md,
  minHeight: 115,
  justifyContent: "center",
  borderWidth: 1,
  borderColor: "#F3E4B5",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.12,
  shadowRadius: 8,
  elevation: 5,
},

homeOptionTitle: {
  fontSize: 18,
  fontWeight: "bold",
  color: colors.primary,
  marginBottom: spacing.xs,
},

homeOptionText: {
  fontSize: 14,
  color: colors.textSecondary,
},
homeTimelineRow: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: spacing.lg,
  marginTop: spacing.sm,
},

homeTimelineStep: {
  alignItems: "center",
  width: 70,
},

homeTimelineCircle: {
  width: 44,
  height: 44,
  borderRadius: 22,
  backgroundColor: colors.secondary,
  justifyContent: "center",
  alignItems: "center",
  marginBottom: spacing.xs,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.12,
  shadowRadius: 4,
  elevation: 3,
},

homeTimelineNumber: {
  fontSize: 18,
  fontWeight: "bold",
  color: colors.primary,
  textAlign: "center",
},

homeTimelineLabel: {
  fontSize: 14,
  fontWeight: "700",
  color: colors.textSecondary,
  textAlign: "center",
},

homeTimelineLine: {
  flex: 1,
  height: 2,
  backgroundColor: "#E8D9A8",
  marginHorizontal: 6,
  marginBottom: 24,
},
homeTimelineCircleActive: {
  backgroundColor: colors.primary,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.22,
  shadowRadius: 8,
  elevation: 6,
},

homeTimelineCircleInactive: {
  backgroundColor: "#F6E7B8",
  borderWidth: 1,
  borderColor: "#E6D39B",
},

homeTimelineNumberActive: {
  color: colors.card,
},

homeTimelineNumberInactive: {
  color: colors.primary,
},

homeTimelineLabelActive: {
  color: colors.primary,
  fontWeight: "800",
},

homeTimelineLabelInactive: {
  color: colors.textSecondary,
  fontWeight: "600",
},
cameraContainer: {
  flex: 1,
  backgroundColor: colors.secondary,
  paddingHorizontal: spacing.md,
  paddingTop: 55,
  paddingBottom: spacing.lg,
},

cameraHeader: {
  alignItems: "center",
  marginBottom: spacing.lg,
},

cameraLogo: {
  width: 90,
  height: 90,
  resizeMode: "contain",
  marginBottom: spacing.sm,
},

cameraTitle: {
  fontSize: 34,
  fontWeight: "bold",
  color: colors.card,
  textAlign: "center",
},

cameraSubtitle: {
  fontSize: 15,
  color: "#FFF4D6",
  textAlign: "center",
  lineHeight: 22,
  marginTop: spacing.xs,
  maxWidth: 320,
},

cameraCard: {
  backgroundColor: colors.card,
  borderRadius: 34,
  padding: spacing.lg,
  borderWidth: 1,
  borderColor: "#F3E4B5",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 10,
  },
  shadowOpacity: 0.18,
  shadowRadius: 16,
  elevation: 8,
},

cameraPreviewBox: {
  height: 250,
  borderRadius: 28,
  backgroundColor: colors.background,
  borderWidth: 1,
  borderColor: colors.border,
  justifyContent: "center",
  alignItems: "center",
  marginBottom: spacing.md,
},

cameraPreviewIcon: {
  width: 95,
  height: 95,
  resizeMode: "contain",
  opacity: 0.9,
  marginBottom: spacing.sm,
},

cameraPreviewText: {
  fontSize: 16,
  fontWeight: "700",
  color: colors.textSecondary,
},

cameraTipsCard: {
  backgroundColor: "#FFF4D6",
  borderRadius: 22,
  padding: spacing.md,
  marginBottom: spacing.md,
},

cameraTipsTitle: {
  fontSize: 17,
  fontWeight: "bold",
  color: colors.primary,
  marginBottom: spacing.xs,
},

cameraTipText: {
  fontSize: 14,
  color: colors.textSecondary,
  lineHeight: 21,
},
cameraFlowContainer: {
  flex: 1,
  backgroundColor: colors.secondary,
  paddingHorizontal: spacing.md,
  paddingTop: 65,
  paddingBottom: spacing.lg,
},

cameraTopBar: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: spacing.lg,
},

cameraBackButton: {
  backgroundColor: colors.card,
  borderRadius: 999,
  paddingHorizontal: spacing.md,
  paddingVertical: spacing.sm,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.12,
  shadowRadius: 8,
  elevation: 4,
},

cameraBackButtonText: {
  fontSize: 16,
  fontWeight: "800",
  color: colors.primary,
},

cameraStepText: {
  fontSize: 15,
  fontWeight: "800",
  color: "#FFF4D6",
},

cameraFlowCard: {
  backgroundColor: colors.card,
  borderRadius: 34,
  padding: spacing.lg,
  borderWidth: 1,
  borderColor: "#F3E4B5",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 10,
  },
  shadowOpacity: 0.18,
  shadowRadius: 16,
  elevation: 8,
},

cameraFlowTitle: {
  fontSize: 32,
  fontWeight: "bold",
  color: colors.primary,
  textAlign: "center",
  marginBottom: spacing.lg,
},

cameraFrame: {
  height: 300,
  borderRadius: 30,
  backgroundColor: colors.background,
  borderWidth: 1,
  borderColor: colors.border,
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: spacing.lg,
  marginBottom: spacing.md,
  overflow: "hidden",
},

cameraFrameIcon: {
  width: 100,
  height: 100,
  resizeMode: "contain",
  marginBottom: spacing.sm,
},

cameraFrameTitle: {
  fontSize: 22,
  fontWeight: "bold",
  color: colors.primary,
  marginBottom: spacing.xs,
},

cameraFrameText: {
  fontSize: 14,
  color: colors.textSecondary,
  textAlign: "center",
  lineHeight: 20,
},

cameraHintBox: {
  backgroundColor: "#FFF4D6",
  borderRadius: 20,
  padding: spacing.md,
  marginBottom: spacing.md,
},

cameraHintText: {
  fontSize: 14,
  fontWeight: "700",
  color: colors.textSecondary,
  textAlign: "center",
},
cameraRealView: {
  width: "100%",
  height: "100%",
},

cameraPhotoPreview: {
  width: "100%",
  height: "100%",
  resizeMode: "cover",
},

cameraPermissionText: {
  fontSize: 16,
  color: colors.textSecondary,
  textAlign: "center",
  lineHeight: 23,
  marginBottom: spacing.lg,
},

cameraButtonGroup: {
  gap: spacing.sm,
},
});